# Employee Work Hours Tracker (Express)

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

Employee Work Hours Tracker is a comprehensive web application built with Express, designed to facilitate efficient time tracking and attendance management for businesses. The application provides user-specific features for employees and administrative features for managing user sessions and IP addresses.

## Features

- Employee Check-in and Check-out: Employees can log their check-in and check-out times through the user-friendly web interface.
- Timestamp Storage: The application saves accurate timestamps for each check-in and check-out action.
- Total Hours Calculation: The system automatically calculates the total hours worked by each employee for each day.
- Secure User Authentication: User login functionality ensures that only authorized personnel can access the application.
- Admin Role: Administrators have access to additional features, such as managing user sessions and IP addresses.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Awaishamza786/AttendanceSystem.git
cd AttendanceSystem
```

2. Install the required dependencies:

```bash
npm install
```

### Usage

1. Start the application by running the following command:

```bash
npm start
```

2. Access the application in your web browser at `http://localhost:8080`.

3. Employees can check in and check out using the web interface.

4. The total hours worked for each employee will be displayed after each check-out.

5. Administrators have access to additional routes for managing user sessions and IP addresses.

## API Routes


### User Routes

- **POST** `/login`: Log in the user. (Implement the `login` function)

- **GET** `/logout`: Log out the user. (Implement the `logout` function)

- **POST** `/showspecific/:email`: Show specific user details based on email. (Implement the `show_specific` function)

### Times

- **Main Route**: `/times`

- **GET** `/show`: Show all work hours records. (Implement the `show` function)

- **GET** `/showtoday/:email`: Show work hours for a specific user for the current day. (Implement the `show_specific_user_session` function)

### User

- **Main Route**: `/user`

- **POST** `/add`: Save user details. (Implement the `userSave` function)

- **GET** `/showall`: Show all users. (Implement the `showUsers` function)

### IP

- **Main Route**: `/ip`

- **POST** `/save`: Save IP address information. (Implement the `saveIp` function)

- **GET** `/showregistered`: Show registered IP addresses. (Implement the `showRegisteredIp` function)

## Admin Routes

Administrators have access to the following routes:

- `/times`: Provides access to time-related administrative functions.
  - **GET** `/show`: Show all work hours records.
  - **GET** `/showtoday/:email`: Show work hours for a specific user for the current day.

- `/user`: Enables user management for administrators.
  - **POST** `/add`: Save user details.
  - **GET** `/showall`: Show all users.

- `/ip`: Allows administrators to manage IP addresses.
  - **POST** `/save`: Save IP address information.
  - **GET** `/showregistered`: Show registered IP addresses.

## Contributing

Contributions to this project are welcome. If you find any issues or want to suggest enhancements, please create a new issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is intended for educational and demonstration purposes only. It may not be suitable for production environments. The developers and contributors are not responsible for any misuse or damages caused by the application. Use it at your own risk.

## Contact

If you have any questions or need further assistance, please feel free to contact us at awaishamza579@gmail.com.

Happy tracking!
