# Time Tracker Web Application

A mobile-friendly, web-based time-tracking application that helps you manage and analyze the time spent on various tasks. This app allows you to start, pause, resume, reset, and delete time trackers for tasks like work, play, sleep, etc., while keeping the data saved across sessions using `localStorage`. The app also includes an analysis tab to compare time spent on each task with color-coded visual bars.

## Features

- **Task Tracking**: 
  - Add new tasks with a custom name.
  - Start, pause, resume, and reset timers for each task.
  - Delete tasks you no longer need.
  
- **Time Analysis**:
  - View color-coded time bars for each task to compare your time allocation visually.
  - See an easy-to-read, real-time update of time spent on each task in hours, minutes, and seconds.

- **Persistent Data**: 
  - Data is saved in the browser's local storage, so tasks and time records are preserved even when you exit or refresh the browser.
  
- **Responsive Design**: 
  - Mobile-friendly layout with large buttons and easy navigation, ideal for use on smartphones via home screen shortcuts.

## Technologies Used

- **HTML**: Structure of the web app.
- **CSS**: Styling, including mobile-responsive layouts.
- **JavaScript**: Application logic for task management, time tracking, and analysis view.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/timetracker-webapp.git
   ```
2. **Open in Browser**
   - Navigate to the project folder and open `index.html` in your preferred browser.

3. **Or Deploy with GitHub Pages**
   - Push the code to a GitHub repository.
   - Go to **Settings > Pages** and set the source branch to `main` (or `master`) to deploy on GitHub Pages.

## Usage

1. **Add a Task**:
   - Click **Add New Task** and enter the task name. 
   - A new task card will appear with options to start, pause, reset, or delete the task.

2. **Track Time**:
   - Click **Start** to begin tracking time.
   - Click **Pause** to stop the timer. You can resume by clicking **Start** again.

3. **Analyze Time**:
   - Navigate to the **Analyze Time** tab to see color-coded bars indicating time spent on each task.
   - The length of each bar represents the time proportion relative to other tasks.

4. **Delete or Reset**:
   - Use the **Delete** button to remove a task entirely or **Reset** to clear the time count for a task.

## File Structure

```
├── index.html         # Main HTML file
├── styles.css         # CSS styling file
├── script.js          # JavaScript logic file
└── README.md          # README documentation file
```

## Code Highlights

- **Local Storage**:
  - Tasks and timers are stored in `localStorage` to ensure data persists across sessions.

- **Automatic Timer Updates**:
  - Timers automatically resume visually updating after a page refresh if they were running previously.

- **Time Analysis View**:
  - The app generates a visual analysis using dynamically created color-coded bars.

