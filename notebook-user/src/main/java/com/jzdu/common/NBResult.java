package com.jzdu.common;

import lombok.Data;

@Data
public class NBResult<T> {
    private int code;
    private String msg;
    private T data;

    public NBResult(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
