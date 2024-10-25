package com.devskiller.orders;
import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.util.*;
import java.util.stream.Collectors;

public class OrdersAnalyzer {

    public Map<DayOfWeek, Integer> averageDailySales(List<Order> orders) {
        Map<DayOfWeek, List<BigDecimal>> dailyTotals = new HashMap<>();
        for (DayOfWeek day : DayOfWeek.values()) {
            dailyTotals.put(day, new ArrayList<>());
        }
        for (Order order : orders) {
            DayOfWeek dayOfWeek = order.creationDate.getDayOfWeek();
            BigDecimal totalOrderValue = calculateOrderTotal(order.orderLines);
            dailyTotals.get(dayOfWeek).add(totalOrderValue);
        }
        return dailyTotals.entrySet().stream().collect(Collectors.toMap(
            Map.Entry::getKey,
            entry -> {
                List<BigDecimal> totals = entry.getValue();
                if (!totals.isEmpty()) {
                    BigDecimal sum = totals.stream()
                                           .reduce(BigDecimal.ZERO, BigDecimal::add);
                    BigDecimal average = sum.divide(BigDecimal.valueOf(totals.size()), 2, BigDecimal.ROUND_HALF_UP);
                    return average.setScale(0, BigDecimal.ROUND_HALF_UP).intValue();
                } else {
                    return 0;
                }
            }
        ));
    }

    // Helper method to calculate the total order value for a given order
    private BigDecimal calculateOrderTotal(List<OrderLine> orderLines) {
        BigDecimal total = BigDecimal.ZERO;
        for (OrderLine orderLine : orderLines) {
            BigDecimal lineTotal = orderLine.unitPrice.multiply(BigDecimal.valueOf(orderLine.quantity));
            total = total.add(lineTotal);
        }
        return total;
    }

    // Static classes from the original file
    static class Order {
        LocalDateTime creationDate;
        List<OrderLine> orderLines;
    }

    static class OrderLine {
        int quantity;
        BigDecimal unitPrice;
    }
}
