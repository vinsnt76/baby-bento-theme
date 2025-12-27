# Baby Bento Email Templates

This project contains email templates for Baby Bento's promotional campaigns, specifically designed for compatibility across various email clients.

## Project Structure

```
baby-bento-email
├── src
│   ├── templates
│   │   ├── Teaser - BCFM25 - 21.25.html         # Original HTML template for Black Friday promotion
│   │   └── Teaser - BCFM25 - 21.25.option-a.html # Modified HTML template for option A
│   ├── styles
│   │   └── email.css                             # CSS styles for email templates
│   └── types
│       └── index.ts                              # TypeScript types and interfaces
├── package.json                                   # npm configuration file
├── tsconfig.json                                  # TypeScript configuration file
└── README.md                                      # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd baby-bento-email
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. To build the project, run:
   ```
   npm run build
   ```

## Usage Guidelines

- The email templates are located in the `src/templates` directory. 
- Modify the HTML files as needed for different promotional campaigns.
- Ensure that any changes maintain compatibility with various email clients by testing the templates before sending.

## Contributing

Contributions are welcome! Please submit a pull request for any changes or enhancements.