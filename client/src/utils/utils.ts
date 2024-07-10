export function formatDateString(dateString: string): string {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();

  const isToday: boolean = date.toDateString() === currentDate.toDateString();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const isYesterday: boolean = date.toDateString() === yesterday.toDateString();

  const formatTime = (date: Date): string => {
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();

    let finalHours = hours.toString();
    let finalMinutes = minutes.toString();

    if (hours < 10) {
      finalHours = "0" + hours;
    }
    if (minutes < 10) {
      finalMinutes = "0" + minutes;
    }

    return `${finalHours}:${finalMinutes}`;
  };

  const formatFullDate = (date: Date): string => {
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1;
    let year: number = date.getFullYear();

    let finalDay: string = day.toString();
    let finalMonth: string = month.toString();

    if (day < 10) {
      finalDay = "0" + day;
    }
    if (month < 10) {
      finalMonth = "0" + month;
    }

    return `${finalDay}/${finalMonth}/${year}`;
  };

  if (isToday) {
    return `hoje, às ${formatTime(date)}`;
  } else if (isYesterday) {
    return `ontem, às ${formatTime(date)}`;
  } else {
    return `${formatFullDate(date)}, às ${formatTime(date)}`;
  }
}

export function compareTimestamps(timestamp1: string, timestamp2: string) {
  const interval = 10 * 60 * 1000; // Intervalo de 10 minutos em milissegundos
  const time1 = new Date(timestamp1).getTime();
  const time2 = new Date(timestamp2).getTime();

  return Math.abs(time1 - time2) <= interval;
}

export const errorCodes = {
  emailAlreadyInUse: 1,
  usernameAlreadyInUse: 2,
  userNotFound: 3,
  passwordNotMatch: 4,
}
