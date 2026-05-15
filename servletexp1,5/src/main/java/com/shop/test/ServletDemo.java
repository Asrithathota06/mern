package com.shop.test;

import com.shop.dao.UserDAO;
import com.shop.dao.ProductDAO;
import com.shop.dao.CartDAO;
import com.shop.model.User;
import com.shop.model.Product;
import com.shop.model.CartItem;

import java.sql.SQLException;
import java.util.List;
import java.math.BigDecimal;

public class ServletDemo {
    public static void main(String[] args) {
        try {
            System.out.println("=== Shopping Servlet Demo ===");

            // Test UserDAO
            UserDAO userDAO = new UserDAO();
            System.out.println("\n1. Testing User Registration and Login:");

            // Register a test user
            User testUser = new User("John Doe", "johndoe", "password123");
            userDAO.register(testUser);
            System.out.println("✓ Registered user: " + testUser.getUsername());

            // Login
            User loggedInUser = userDAO.login("johndoe", "password123");
            if (loggedInUser != null) {
                System.out.println("✓ Login successful for: " + loggedInUser.getName());
            }

            // Test ProductDAO
            ProductDAO productDAO = new ProductDAO();
            System.out.println("\n2. Testing Product Catalog:");

            List<Product> products = productDAO.findAll();
            System.out.println("Available products:");
            for (Product p : products) {
                System.out.println("  - " + p.getName() + " ($" + p.getPrice() + ")");
            }

            // Test CartDAO
            CartDAO cartDAO = new CartDAO();
            System.out.println("\n3. Testing Shopping Cart:");

            // Add first product to cart
            if (!products.isEmpty()) {
                Product firstProduct = products.get(0);
                cartDAO.addToCart(loggedInUser.getId(), firstProduct.getId());
                System.out.println("✓ Added " + firstProduct.getName() + " to cart");

                // Get cart items
                List<CartItem> cartItems = cartDAO.findCartItems(loggedInUser.getId());
                System.out.println("Cart contents:");
                for (CartItem item : cartItems) {
                    System.out.println("  - " + item.getProductName() + " (Qty: " + item.getQuantity() + ")");
                }

                // Get total
                BigDecimal total = cartDAO.getCartTotal(loggedInUser.getId());
                System.out.println("Total: $" + total);

                // Checkout (clear cart)
                cartDAO.clearCart(loggedInUser.getId());
                System.out.println("✓ Checkout completed - cart cleared");
            }

            System.out.println("\n=== Demo completed successfully! ===");

        } catch (SQLException e) {
            System.err.println("Database error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}