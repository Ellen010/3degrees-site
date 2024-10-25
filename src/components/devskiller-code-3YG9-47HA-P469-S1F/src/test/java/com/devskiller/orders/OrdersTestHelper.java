package com.devskiller.orders;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializer;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

public class OrdersTestHelper {

	static Gson gson = new GsonBuilder().registerTypeAdapter(LocalDateTime.class, (JsonDeserializer<LocalDateTime>) (json, type, jsonDeserializationContext) -> ZonedDateTime.parse(json.getAsJsonPrimitive().getAsString()).toLocalDateTime()).create();

	static Type listType = new TypeToken<ArrayList<OrdersAnalyzer.Order>>() {}.getType();

	static List<OrdersAnalyzer.Order> readOrders(String fileName) throws IOException {
		return gson.fromJson(Files.readString(Path.of(fileName)), listType);
	}

}
