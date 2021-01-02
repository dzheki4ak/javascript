const formatTime = new Intl.DateTimeFormat('en', {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
})

const getGreenwichTime = date => formatTime.format(date);

getGreenwichTime(new Date());