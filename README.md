# Simple Test Website

A practice ASP.NET Core Razor Pages website featuring an embedded YouTube video and an interactive box animation.

## 🎯 Features

- **Welcome Page**: Clean, centered layout with a welcome message
- **Embedded YouTube Video**: Displays a YouTube video player
- **Interactive Animation**: Click the "Animate" button to watch a red box move:
  - Moves 200px to the right
  - Moves 400px to the left (past starting point)
  - Returns to center position
- **Responsive Design**: Built with Bootstrap for mobile-friendly layouts

## 🛠️ Technologies Used

- **ASP.NET Core Razor Pages** (.NET 10)
- **C#** (Version 14.0)
- **Bootstrap** (CSS framework)
- **JavaScript** (Vanilla JS for animations)
- **HTML5/CSS3**

## 📋 Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- Visual Studio 2022 (or later) or Visual Studio Code
- A modern web browser

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thomas-B04/visual_studio_practice_site.git
   cd simple_test_website
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Build the project**
   ```bash
   dotnet build
   ```

4. **Run the application**
   ```bash
   dotnet run
   ```

5. **Open in browser**
   Navigate to `https://localhost:5001` or `http://localhost:5000`

### Using Visual Studio

1. Open `simple_test_website.sln` in Visual Studio
2. Press `F5` or click the "Run" button
3. The application will launch in your default browser

## 📂 Project Structure

```
simple_test_website/
├── Pages/
│   ├── Index.cshtml              # Home page with video and animation
│   ├── Index.cshtml.cs           # Page model for Index
│   └── Shared/                   # Shared layout and partials
├── wwwroot/
│   ├── css/
│   │   └── site.css              # Custom styles including box animation
│   ├── js/
│   │   └── site.js               # Animation logic
│   └── lib/                      # Client-side libraries (Bootstrap, etc.)
├── Program.cs                    # Application entry point
└── README.md                     # This file
```

## 🎨 How It Works

### The Animation

The box animation is implemented using vanilla JavaScript with three distinct phases:

1. **Phase 1 - Move Right**: Box moves 200px to the right
2. **Phase 2 - Move Left**: Box moves 400px to the left (200px past center)
3. **Phase 3 - Return to Center**: Box moves back to starting position

**Key Implementation Details:**
- **Interval**: Animation updates every 5ms for smooth motion
- **Speed**: Box moves 2 pixels per frame
- **CSS**: Box uses `position: relative` with dynamic `left` property
- **Centering**: Box is centered using `margin: 0 auto`

### Code Snippet
```javascript
function move_box() {
    let box = document.getElementById("moving_box");
    let pos = 0;
    let phase = 1;
    
    let interval = setInterval(() => {
        // Three-phase animation logic
        // Phase 1: Right, Phase 2: Left, Phase 3: Center
    }, 5);
}
```

## 🎓 Learning Objectives

This project demonstrates:
- ✅ ASP.NET Core Razor Pages fundamentals
- ✅ Bootstrap integration for responsive design
- ✅ JavaScript DOM manipulation
- ✅ CSS positioning and styling
- ✅ Embedding third-party content (YouTube)
- ✅ Event handling with onclick attributes
- ✅ Interval-based animations

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari

## 📝 Customization

### Change Animation Speed
Edit the interval timing in `site.js`:
```javascript
let interval = setInterval(() => { ... }, 5); // Change 5 to desired milliseconds
```

### Change Animation Distance
Modify the position thresholds in `site.js`:
```javascript
if (pos >= 200) { ... } // Change 200 to desired pixels
```

### Change Box Appearance
Edit the `#moving_box` styles in `site.css`:
```css
#moving_box {
    width: 100px;        /* Change dimensions */
    height: 100px;
    background-color: red; /* Change color */
}
```

## 🤝 Contributing

This is a practice project, but feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 👤 Author

**Thomas-B04**
- GitHub: [@Thomas-B04](https://github.com/Thomas-B04)
- Repository: [visual_studio_practice_site](https://github.com/Thomas-B04/visual_studio_practice_site)

## 🙏 Acknowledgments

- ASP.NET Core documentation
- Bootstrap framework
- YouTube embed API

---

**Happy Coding! 🚀**
