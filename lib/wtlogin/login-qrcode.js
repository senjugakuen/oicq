/**
 * 二维码登录流程
 * 
 * token -> ok(二次)
 * token not exists ↘
 *                     fetch -> qrcodeLogin -> ok
 * token (expired)  ↗
 */
"use strict";
const fs = require("fs");
const path = require("path");
const Readable = require("stream").Readable;
const WtLogin = require("./wt");
const tea = require("../algo/tea");
const jce = require("../algo/jce");
const pb = require("../algo/pb");
const ecdh = require("./ecdh");
const Writer = require("./writer");
const tlv = require("./tlv");
const { timestamp, md5, BUF16, NOOP } = require("../common");

WtLogin.prototype.buildTransEmpPacket = function (seq, type, body) {
    new Writer().writeU8(2)
        .writeU16(44 + body.length)
        .writeU16(type)
        .writeBytes(Buffer.alloc(21))
        .writeU8(3)
        .writeU16(0)
        .writeU16(50)
        .writeU32(seq)
        .writeU64(0)
        .writeBytes(body)
        .writeU8(3)
        .read()
}

WtLogin.prototype.fetchQrcode = async function () {

};

WtLogin.prototype.qrcodeLogin = async function () {
    
};
