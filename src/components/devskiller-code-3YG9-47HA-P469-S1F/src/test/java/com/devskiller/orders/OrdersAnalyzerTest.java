package com.devskiller.orders;

import org.junit.Before;
import org.junit.Test;

import java.time.DayOfWeek;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class OrdersAnalyzerTest {

	private List<OrdersAnalyzer.Order> orders;

	@Before
	public void setUp() throws Exception {
		orders = OrdersTestHelper.readOrders("src/test/resources/orders.json");
	}

	@Test
	public void shouldReturnCorrectValueForMonday() {
		// given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.MONDAY)).isEqualTo(37);
	}

	@Test
	public void shouldReturnCorrectValueForTuesday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.TUESDAY)).isEqualTo(0);
	}

	@Test
	public void shouldReturnCorrectValueForWednesday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.WEDNESDAY)).isEqualTo(0);
	}

	@Test
	public void shouldReturnCorrectValueForThursday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.THURSDAY)).isEqualTo(0);
	}

	@Test
	public void shouldReturnCorrectValueForFriday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.FRIDAY)).isEqualTo(0);
	}

	@Test
	public void shouldReturnCorrectValueForSaturday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.SATURDAY)).isEqualTo(7);
	}

	@Test
	public void shouldReturnCorrectValueForSunday() {
		//given
		OrdersAnalyzer ordersAnalyzer = new OrdersAnalyzer();

		// when
		Map<DayOfWeek, Integer> result = ordersAnalyzer.averageDailySales(orders);

		// then
		assertThat(result.get(DayOfWeek.SUNDAY)).isEqualTo(35);
	}
}
