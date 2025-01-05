
# MicroCommerce Frontend

## Overview
MicroCommerce Frontend is a responsive e-commerce application built using modern web technologies. This project serves as the frontend for the MicroCommerce ecosystem and provides features like product browsing, cart management, user authentication, and order tracking.

---

## Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Bootstrap](https://getbootstrap.com/)
- **State Management**: Context API
- **Testing**: [Cypress](https://www.cypress.io/)

---

## Features
### Implemented
- User Authentication
- Product Listing
- Product Details
- Cart Management
- Checkout
- Order History
- Product Reviews

---

## Tests

### Stack
Tests are implemented using **Cypress** for end-to-end testing. Tests cover a wide range of scenarios to ensure the stability and functionality of the application.

### Scenarios

#### **Implemented**
1. **User Authentication**
    - Login functionality
    - Signup functionality
    - Logout functionality
    - Access restrictions for protected routes

2. **Product Listing**
    - Displaying all available products
    - Filtering products via search

3. **Product Details**
    - Displaying product information
    - Adding products to the cart
    - Handling reviews and ratings

4. **Cart Management**
    - Adding items to the cart
    - Updating quantities
    - Removing items

5. **Checkout**
    - Proceeding with checkout for logged-in users
    - Preventing checkout for guests

#### **Remaining**
1. **Order History**
    - Displaying past orders
    - Restricting access for unauthenticated users
    - Handling empty orders list

2. **Reviews**
    - Adding a new review
    - Displaying existing reviews

3. **Navigation**
    - Testing navigation across all pages (e.g., redirections and menu links)

---

## Running the Project

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/microcommerce-frontend.git
   cd microcommerce-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the application:
   Navigate to `http://localhost:3000` in your browser.

---

## Testing

### Running Tests
1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```

2. Run all tests directly from the Cypress UI or via CLI:
   ```bash
   npx cypress run
   ```

---

## License
This project uses a **custom license**. Usage is only permitted with written permission from the author: Damian Pągowski

