function calculateTime(jobDate) {
  let postDate = new Date(jobDate);
  let currentDate = new Date();
  let differentTime = Math.abs(currentDate - postDate);

  const diffDays = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.round(Math.ceil(currentDate - postDate) / 36e5);
  if (diffHours < 1) return `1h ago`;
  if (diffHours < 23) return `${diffHours}h ago`;
  if (diffHours >= 23) return `${diffDays}d ago`;
}

function checkImage(logo) {
  if (logo === null) {
    return "assets/icons/default.svg";
  } else {
    return logo;
  }
}
