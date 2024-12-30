export default function formatTime(totalSeconds: number): string {
  if (totalSeconds < 0) {
    return "00:00:00"; // Or handle negative numbers differently if needed
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const colon = seconds % 2 === 0 ? ":" : " "; // blink effect on even/odd seconds

  //   ${formattedHours}${colon}

  return `${formattedMinutes}${colon}${formattedSeconds}`;
}
