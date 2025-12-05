/**
 * Utility function to format dates from "YYYY-MM" format to "MMM YYYY" format
 * Example: "2025-01" -> "Jan 2025"
 */
export const formatDate = (dateString: string): string => {
  if (!dateString || dateString === 'Present') {
    return 'Present';
  }

  // Handle "YYYY-MM" format
  const dateMatch = dateString.match(/^(\d{4})-(\d{2})$/);
  if (dateMatch) {
    const [, year, month] = dateMatch;
    const monthIndex = parseInt(month, 10) - 1;
    const date = new Date(parseInt(year, 10), monthIndex);
    
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    return `${monthNames[monthIndex]} ${year}`;
  }

  // Fallback: return as-is if format doesn't match
  return dateString;
};

/**
 * Format a date range from "YYYY-MM" to "YYYY-MM" format
 * Example: "2025-01" - "2025-05" -> "2025-01 - 2025-05"
 * Or formatted: "Jan 2025 - May 2025"
 */
export const formatDateRange = (startDate: string, endDate?: string): string => {
  const formattedStart = formatDate(startDate);
  const formattedEnd = endDate ? formatDate(endDate) : 'Present';
  
  return `${formattedStart} - ${formattedEnd}`;
};

