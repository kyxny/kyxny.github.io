/**
 *
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import request from "request";
const z = console.info;
const URL = "https://www.sxdkcapp.com/sxd2023/";
const dir = "./sxd2023/";
let css = {},
  js = {};
js.h = {
  8: "694c257d",
  25: "918e38ed",
  104: "fee8a307",
  149: "26a9a802",
  385: "386d63f1",
  431: "cc2e4724",
  510: "90d0aea2",
  512: "73bb87d5",
  704: "72c19fa2",
  721: "cf12fef3",
  826: "0a84e279",
  834: "f54662b6",
  917: "e49a9a0e",
  991: "751ec182",
};

const pageIndex = {
  8: "mobile",
  25: "MobileVideo",
  104: "MobileVideoList",
  431: "MobileNewsList",
  510: "MobilePhilosophy",
  512: "MobileStructure",
  704: "MobileNews",
  721: "MobileContact",
  826: "index",
  834: "MobileRescue",
  917: "MobilePartner",
  991: "MobileHonour",
};
css.f = function (t) {
  return (
    "css/" +
    pageIndex[t] +
    "." +
    {
      8: "72c01d10",
      25: "38f34f79",
      104: "7cea77f4",
      431: "1e56ad0f",
      511: "e79d42f7",
      512: "5ce2ee4e",
      704: "32e6fb04",
      721: "5bb3545d",
      826: "22921d40",
      834: "59febbaf",
      917: "6fa1ee24",
      991: "677b26ff",
    }[t] +
    ".css"
  );
};
js.f = function (t) {
  let pre = pageIndex[t];
  return "js/" + (pre ? pre : t) + "." + js.h[t] + ".js";
};

function getfileByUrl(url, fileName, dir) {
  console.log("------------------------------------------------");
  console.log(url);
  console.log(fileName);
  console.log(dir);
  let stream = fs.createWriteStream(path.join(dir, fileName));
  //   request(url).pipe(stream).on("close", function (err) {
  //       console.log("文件" + fileName + "下载完毕");
  //   });
  fetch(url)
    .then((res) => z(res.text()))
    .catch((err) => {
      z(err);
    })
    .then((json) => console.log(json))
    .catch((err) => {
      z(err);
    });
}
//循环下载
for (let i in js.h) {
  let item = js.f(i);
  makeDir(dir + item);
  // getfileByUrl(URL + item, item, dir);
}
for (let i in pageIndex) {
  let item = css.f(i);
  makeDir(dir + item);
  // getfileByUrl(URL + item, item, dir);
}
function makeDir(dirpath) {
  if (!fs.existsSync(dirpath)) {
    var pathtmp;
    dirpath.split("/").forEach(function (dirname) {
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname);
      } else {
        if (dirname) {
          pathtmp = dirname;
        } else {
          pathtmp = "/";
        }
      }
      if (!fs.existsSync(pathtmp)) {
        z("pathtmp", pathtmp);
        if (pathtmp != "sxd2023" && pathtmp != "sxd2023\\js" && pathtmp != "sxd2023\\css") {
          // fs.writeFileSync(pathtmp, "");
          return false;
        } else if (!fs.mkdirSync(pathtmp)) {
          return false;
        }
      }
    });
    //   } else {
    //     deleteFolderFiles(dirpath);
  }
  return true;
}
