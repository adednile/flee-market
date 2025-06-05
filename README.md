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

## 🧠 Code Highlights

- `UserController.java`: Handles registration, login, and user-related API endpoints.
- `ProductController.java`: Manages product listing, updates, and deletions.
- `OrderService.java`: Contains business logic for processing customer orders.
- `VendorRepository.java`: Interfaces with the database for vendor-related queries.
- `Customer.java` and `Vendor.java`: Represent the user roles in the system and extend a base `User` entity.

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

## 📄 License

This project is licensed under the [MIT License](LICENSE).
