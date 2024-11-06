Flashcards App
Welcome to the Flashcards App! This project is a React-based flashcards application designed for efficient learning and review of decks containing flashcards. The app includes features such as deck management, filtering, pagination, and user authentication.

⚠️ Note: Some functionalities in this app are currently under construction and will be updated soon.

Table of Contents
Features
Installation
Usage
Folder Structure
Contributing
License
Features
User Authentication: Log in, log out, and personalized content.
Deck Management: View, add, and filter decks.
Search & Filter: Filter decks by name, card count, and pagination controls.
Pagination: Navigate through deck lists and select items per page.
Dynamic Routing: Use react-router-dom to handle app navigation.
Installation
To set up the app locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/flashcards-app.git
cd flashcards-app
Install dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
npm start
This will start the app on http://localhost:3000.

Usage
After starting the app, you can:

Log in to access your personalized flashcards and decks.
Navigate to Decks to view, filter, and manage your flashcard decks.
Adjust filters like deck name, card count, and items per page to customize the displayed deck list.
Key Components
DecksPage: Renders the list of decks, search filters, and pagination controls.
FilterControls: Allows users to filter decks by name and card count range.
Pagination: Manages deck pagination, including page size and navigation.
Layout: Application layout that includes the Header with a logout option.
Folder Structure
plaintext
Copy code
flashcards-app/
├── public/
├── src/
│   ├── app/
│   │   ├── api/           # API calls and service hooks
│   │   └── store.ts       # Redux store configuration
│   ├── components/
│   │   ├── ui/            # UI components like paginator, typography
│   │   └── header/        # Header component with navigation
│   ├── utils/             # Reusable utility functions
│   ├── pages/
│   │   └── Decks/         # Decks page and related components
│   ├── styles/            # SCSS modules and global styles
│   └── App.tsx            # Main application component
├── package.json
└── README.md
Contributing
If you want to contribute to this project, please fork the repository and create a pull request with detailed explanations of your changes. Contributions are always welcome!

Fork the repository.
Create a new feature branch: git checkout -b feature/YourFeatureName.
Commit your changes: git commit -m 'Add YourFeatureName'.
Push to the branch: git push origin feature/YourFeatureName.
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.