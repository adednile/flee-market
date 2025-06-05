# 🛍️ Flee Market

**Flee Market** is a full-stack online marketplace application developed using Java and Spring Boot. It facilitates buying and selling of items, allowing **vendors** to register and list their products, while **customers** can browse, add items to their cart, and place orders seamlessly.

## ✨ Features

- Vendor registration, login, and shop profile management
- Product listing, updating, and deletion by vendors
- Product browsing and search functionality for customers
- Customer registration and profile management
- Shopping cart and secure checkout process
- Order history and status tracking
- RESTful APIs built using Spring Boot controllers
- Secure user authentication and role-based access
- Timestamped records for auditing and transaction history

## 🧠 Code Highlights

- `UserController.java`: Handles user registration, authentication, and profile management APIs.
- `ProductController.java`: Provides endpoints for vendors to manage their product listings.
- `OrderController.java`: Manages order creation, listing, and status updates.
- `OrderService.java`: Contains core business logic for processing customer orders, including cart validation and payment stub integration.
- `VendorRepository.java`, `CustomerRepository.java`, `ProductRepository.java`: Spring Data JPA repositories for database interaction.
- `Customer.java`, `Vendor.java`, `Product.java`, `Order.java`, `OrderItem.java`: JPA entity classes representing the core domain model.
- `application.properties`: Configuration file for setting up database connectivity and JPA behavior.
- `GlobalExceptionHandler.java`: Centralized error handler using `@ControllerAdvice` for clean API error responses.

## 🗃️ Database Schema Overview

- `users`: Stores shared user information like login credentials, names, and contact details.
- `vendors`: Contains vendor-specific fields like shop name and rating.
- `customers`: Stores customer-specific information including shipping address and loyalty points.
- `products`: Holds product data such as title, price, quantity, and associated vendor.
- `orders`: Logs customer purchases, total cost, and timestamp.
- `order_items`: Contains individual items in an order with quantity and price.

## 🚀 Getting Started

### Prerequisites

- Java 11 or higher
- Maven (or Gradle)
- MySQL or PostgreSQL (update credentials in `application.properties`)

### Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/adednile/flee-market.git
   cd flee-market
   ```

2. Configure your database connection in `src/main/resources/application.properties`.

3. Build and run the application:

   ```bash
   ./mvnw spring-boot:run
   ```

4. Access the application at:
   - `http://localhost:8080`

## 🧪 API Testing

You can test the application using tools like **Postman** or **curl**:

- `POST /api/users/register`: Register a new user
- `POST /api/vendors/add-product`: Add a product as a vendor
- `GET /api/products`: Fetch available products
- `POST /api/orders/checkout`: Place an order

## 📄 License

This project is licensed under the [MIT License](LICENSE).
