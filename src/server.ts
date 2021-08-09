import app from './app';

app.listen(Number(process.env.PORT || 3000), String(process.env.HOST || '0.0.0.0'))
