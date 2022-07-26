import http from "http";
import express, { Express } from "express";
import routes from "./apps/api/routes";
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';

const router: Express = express();

/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

router.use(logger('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser())
router.use(express.static(path.join(__dirname, 'public')))



router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }

  next();
});

/** Routes */
router.use("/", routes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

export default http.createServer(router)