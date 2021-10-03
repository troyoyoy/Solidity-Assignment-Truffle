// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
contract HelloWorld {
    string message;
    function  HelloWorld() {
        //constructor
        message = "Hello World!!";
    }

    function SayHello() returns (string) {
        return message;
    }
}