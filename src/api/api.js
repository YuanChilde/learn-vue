import request from "../api";
import {FORM_CONTENT_TYPE} from './config';

export const DEMO_POST_JSON_URL = (p) =>
  request.post("/api/v1/test/test01", p);

export const DEMO_POST_FORM_URL = (p) =>
  request.post("/api/v1/test/test02", p,{timeout:15000,headers: {"Content-Type": FORM_CONTENT_TYPE}});

export const DEMO_GET_URL = (p,o) => request.get("/api/v1/test/test03", p,o);
