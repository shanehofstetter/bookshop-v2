import * as React from "react";

export const addClass = (classes, className) => [...classes.split(' '), className].join(' ');
