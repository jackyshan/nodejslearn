const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');
const templating = require('./templating');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//静态文件
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser());

//集成Nunjucks
const isProduction = process.env.NODE_ENV === 'production';
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controllers:
app.use(controller());


app.listen(3000);
console.log('app started at port 3000...');