# Event Management System

An Event Management System that facilitates managing various types of events like conferences, concerts, workshops, corporate meetings, and more. Users can create events, register attendees, book venues, manage schedules, etc. The system can be split into various microservices, each handling a specific domain.
## Features

- Create and manage events (conferences, concerts, workshops, etc.).
- Register attendees for events.
- Venue management for events.
- Send notifications for event updates and reminders.
- Handle payments for tickets and other services.
- Manage event schedules/agenda.
## Microservices

### 1. Event Service
- **Responsibilities:** Create, update, and delete events.
- **Endpoints:**
  - `POST /events`: Create a new event.
  - `GET /events/{id}`: Retrieve event details by ID.
  - `PUT /events/{id}`: Update event information.
  - `DELETE /events/{id}`: Delete an event.
  
### 2. User/Attendee Service
- **Responsibilities:** Manage users, register/unregister attendees for events.
- **Endpoints:**
  - `POST /users`: Create a new user.
  - `GET /users/{id}`: Retrieve user details.
  - `POST /events/{id}/register`: Register user for an event.
  - `DELETE /events/{id}/unregister`: Unregister user from an event.
  
### 3. Venue Service
- **Responsibilities:** Manage venues for events.
- **Endpoints:**
  - `POST /venues`: Add a new venue.
  - `GET /venues/{id}`: Retrieve venue details.
  - `PUT /venues/{id}`: Update venue information.
  - `DELETE /venues/{id}`: Delete a venue.
  
### 4. Notification Service
- **Responsibilities:** Send notifications (email/SMS) for event updates.
- **Endpoints:**
  - `POST /notify`: Send notifications to attendees (email, SMS).
  
### 5. Payment Service
- **Responsibilities:** Handle payments for event tickets.
- **Endpoints:**
  - `POST /payments`: Process payment.
  - `GET /payments/{id}`: Retrieve payment details.

### 6. Schedule Service
- **Responsibilities:** Manage event schedules and agendas.
- **Endpoints:**
  - `POST /events/{id}/schedule`: Create a schedule for an event.
  - `GET /events/{id}/schedule`: Retrieve the event schedule.

## Technologies Used
- **Frontend:** React.js (or Next.js) - User interface for event management.
- **Backend:** Node.js with Express or FastAPI - For handling requests across microservices.
- **Database:** MongoDB, PostgreSQL (each microservice can have its own database).
- **Containerization:** Docker - To package each microservice.
- **Orchestration:** Kubernetes - For deploying and managing microservices in a distributed environment.
- **Message Broker:** RabbitMQ / Kafka (for async communication between services).
- **API Gateway:** NGINX or Kong Gateway for routing and security.
- **Authentication:** OAuth2 / JWT - Secure user authentication.
## Installation & Setup

### Prerequisites
- [**Docker**](https://docs.docker.com/get-docker/) installed on your machine.
- [**Kubernetes**](https://kubernetes.io/releases/download/) (for deploying microservices).
- [**Node.js**](https://nodejs.org/en) and/or [**Java**](https://www.java.com/en/) installed locally for running backend services.

### Steps to Run Locally
1. **Clone the repository:**

    ```bash
   git clone https://github.com/ThePral/Event-Management-System.git
   cd event-management-system
    ```
2. **Build Docker images for each microservice:**

    ```bash
    docker-compose up --build
    ```
3. **Run services via Kubernetes:** Make sure you have `kubectl` configured. Deploy the microservices using the provided Kubernetes YAML files:

    ```bash
    kubectl apply -f k8s/
    ```
4. **Access the application:** The application should now be running. You can access it at `http://localhost:{8080}`.
## Contributing

#### If you wish to contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
## Authors

- [ThePral](https://www.github.com/ThePral)
- [AsaliMasali](https://www.github.com/Asalimasali)
