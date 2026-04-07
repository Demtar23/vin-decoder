# VIN Decoder

A web application for decoding vehicle VIN codes using the open NHTSA API.

## 🔗 Links

- [Live Demo](https://demtar23.github.io/vin-decoder/)

## 📋 Features

- VIN code decoding with detailed vehicle characteristics
- Input validation (empty field, max 17 characters, only latin letters and digits)
- History of the last 3 requests with ability to reuse them
- List of all NHTSA variables with descriptions
- Detailed page for each variable

## 🛠 Tech Stack

- React 19
- TypeScript
- React Router v7
- Vite
- NHTSA Vehicle API

## 🚀 Local Setup

### Requirements

- Node.js version 18 or higher

### Steps

1. Clone the repository
```bash
git clone https://github.com/Demtar23/vin-decoder.git
```

2. Navigate to the project folder
```bash
cd vin-decoder
```

3. Install dependencies
```bash
npm install
```

4. Start the application
```bash
npm run dev
```

5. Open in browser
```
http://localhost:5173
```