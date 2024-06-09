export const calculateTimeLived = (birthDate) => {
    if (!birthDate) return null;
  
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);
    const result = (currentDate.getTime() - birthDateObj.getTime()) / 1000;
  
    if (result >= 0) {
      const years = Math.floor(result / 31556952); // número de segundos em um ano médio
      const months = Math.floor((result % 31556952) / 2629746); // número de segundos em um mês médio
      const days = Math.floor((result % 2629746) / 86400); // número de segundos em um dia
  
      return { years, months, days };
    } else {
      const years = '--';
      const months = '--';
      const days = '--';
  
      return { years, months, days };
    }
  
  };