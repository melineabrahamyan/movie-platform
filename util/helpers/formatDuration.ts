export const formatDuration = (duration: string): string => {
  const durationInSeconds = parseInt(duration, 10);

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);

  let formattedDuration = '';
  if (hours > 0) {
    formattedDuration += `${hours}h `;
  }
  if (minutes > 0) {
    formattedDuration += `${minutes}m`;
  }

  return formattedDuration.trim();
};
