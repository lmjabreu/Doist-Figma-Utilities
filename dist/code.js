/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/setFullSize */ "./src/functions/setFullSize.ts");
/* harmony import */ var _functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/formatIllo */ "./src/functions/formatIllo.ts");
/* harmony import */ var _functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/frameScreenshot */ "./src/functions/frameScreenshot.ts");
/* harmony import */ var _functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/hideAnnotations */ "./src/functions/hideAnnotations.ts");
/* harmony import */ var _functions_createSlices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/createSlices */ "./src/functions/createSlices.ts");
/* harmony import */ var _functions_autolayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/autolayout */ "./src/functions/autolayout.ts");
/* harmony import */ var _functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/changeSpacing */ "./src/functions/changeSpacing.ts");







//setup UI
if (figma.command === "showUI") {
    figma.showUI(__html__, {
        width: 300,
        height: 300,
    });
    figma.ui.onmessage = (message) => {
        if (message === "fullWidth") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
        }
        else if (message === "fullHeight") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
        }
        else if (message === "fullSize") {
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
            (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
        }
        else if (message === "frameScreenshot") {
            (0,_functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__.frameScreenShot)();
        }
        else if (message === "formatIllo") {
            (0,_functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__.formatIllo)();
        }
        else if (message === "hideAnnotations") {
            (0,_functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__.hideAnnotations)();
        }
        else if (message === "iosSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("ios");
        }
        else if (message === "androidSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("android");
        }
        else if (message === "webSlices") {
            (0,_functions_createSlices__WEBPACK_IMPORTED_MODULE_4__.createSlices)("web");
        }
        else {
            return;
        }
    };
}
// set up menu commands
if (figma.command === "frameScreenShot") {
    (0,_functions_frameScreenshot__WEBPACK_IMPORTED_MODULE_2__.frameScreenShot)();
    //   figma.closePlugin();
}
if (figma.command === "hideAnnotations") {
    (0,_functions_hideAnnotations__WEBPACK_IMPORTED_MODULE_3__.hideAnnotations)();
    figma.closePlugin();
}
if (figma.command === "fullWidth") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
    figma.closePlugin();
}
if (figma.command === "fullHeight") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
    figma.closePlugin();
}
if (figma.command === "fullSize") {
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("vertical");
    (0,_functions_setFullSize__WEBPACK_IMPORTED_MODULE_0__.setFullSize)("horizontal");
    figma.closePlugin();
}
if (figma.command === "formatIllo") {
    (0,_functions_formatIllo__WEBPACK_IMPORTED_MODULE_1__.formatIllo)();
    figma.closePlugin();
}
if (figma.command === "increaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__.increaseSpacing)();
}
if (figma.command === "decreaseSpacing") {
    (0,_functions_changeSpacing__WEBPACK_IMPORTED_MODULE_6__.decreaseSpacing)();
}
if (figma.command === "itemsStretch") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_5__.itemsStretch)();
}
if (figma.command === "itemsCenter") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_5__.itemsCenter)();
}
if (figma.command === "justifyBetween") {
    (0,_functions_autolayout__WEBPACK_IMPORTED_MODULE_5__.justifyBetween)();
}


/***/ }),

/***/ "./src/functions/addChildToFrame.ts":
/*!******************************************!*\
  !*** ./src/functions/addChildToFrame.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildToFrame": () => (/* binding */ addChildToFrame)
/* harmony export */ });
const addChildToFrame = function (shape, frame) {
    //create variables
    const parent = shape.parent;
    const shapeWidth = shape.width;
    const shapeHeight = shape.height;
    const shapePos = shape.relativeTransform;
    //add frame to child's parent
    parent.appendChild(frame);
    //add child to frame
    frame.appendChild(shape);
    // //put frame where child was, put child in 0,0 pos
    frame.relativeTransform = shapePos;
    shape.x = 0;
    shape.y = 0;
    //resize frame to child's size
    frame.resizeWithoutConstraints(shapeWidth, shapeHeight);
    shape.constraints = {
        horizontal: "SCALE",
        vertical: "SCALE",
    };
};



/***/ }),

/***/ "./src/functions/autolayout.ts":
/*!*************************************!*\
  !*** ./src/functions/autolayout.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemsStretch": () => (/* binding */ itemsStretch),
/* harmony export */   "justifyBetween": () => (/* binding */ justifyBetween),
/* harmony export */   "itemsCenter": () => (/* binding */ itemsCenter)
/* harmony export */ });
function biggestNumberInArray(arr) {
    const max = Math.max(...arr);
    return max;
}
function returnTopObject(arr) {
    const min = arr.indexOf(Math.min(...arr));
    console.log(arr);
    return min;
}
const getChildrenHeights = function (children) {
    console.log(returnTopObject(children));
    //find difference between bottom of first and top of second
    //   const firstChildTop = children[0].y;
    //   const firstChildBottom = firstChildTop + children[0].height;
    //   const secondChildTop = children[1].y;
    //   const secondChildBottom = secondChildTop + children[1].height;
    //   const gap =
    //     secondChildBottom < firstChildTop
    //       ? firstChildTop - secondChildBottom
    //       : secondChildTop - firstChildBottom;
    //   return gap;
};
const itemsStretch = function () {
    let children = figma.currentPage.selection;
    if (children.length === 0) {
        figma.closePlugin("Select at least one object");
    }
    //get the parent of the first child
    const parent = children[0].parent;
    let secondParent;
    if (children.length > 1) {
        secondParent = children[1].parent;
    }
    //get the relative location of the first child
    const shapePos = children[0].relativeTransform;
    const frame = figma.createFrame();
    //add the new frame to the parent
    parent.appendChild(frame);
    //set the position of new frame to first child's pos
    frame.relativeTransform = shapePos;
    //set the width of new frame to widest child
    const widths = [];
    children.forEach((child) => {
        widths.push(child.width);
    });
    const yValues = [];
    children.forEach((child) => {
        yValues.push(child.y);
    });
    const maxWidth = biggestNumberInArray(widths);
    frame.resizeWithoutConstraints(maxWidth, 100);
    //remove frame fill
    frame.fills = [];
    //add children to frame
    if (parent === secondParent) {
        children
            .slice()
            .reverse()
            .forEach((child) => {
            frame.appendChild(child);
        });
    }
    else {
        children.forEach((child) => {
            frame.appendChild(child);
        });
    }
    //apply autolayout
    getChildrenHeights(yValues);
    frame.layoutMode = "VERTICAL";
    for (let child of children) {
        child.layoutAlign = "STRETCH";
        child.layoutGrow = 0;
    }
    figma.currentPage.selection = [frame];
    figma.closePlugin();
};
const itemsCenter = function () {
    let children = figma.currentPage.selection;
    if (children.length === 0) {
        figma.closePlugin("Select at least one object");
    }
    //get the parent of the first child
    const parent = children[0].parent;
    let secondParent;
    if (children.length > 1) {
        secondParent = children[1].parent;
    }
    //get the relative location of the first child
    const shapePos = children[0].relativeTransform;
    const frame = figma.createFrame();
    //add the new frame to the parent
    parent.appendChild(frame);
    //set the position of new frame to first child's pos
    frame.relativeTransform = shapePos;
    //set the width of new frame to widest child
    const heights = [];
    children.forEach((child) => {
        heights.push(child.height);
    });
    const maxHeight = biggestNumberInArray(heights);
    frame.resizeWithoutConstraints(100, maxHeight);
    //remove frame fill
    frame.fills = [];
    //add children to frame
    if (parent !== secondParent) {
        children
            .slice()
            .reverse()
            .forEach((child) => {
            frame.appendChild(child);
        });
    }
    else {
        children.forEach((child) => {
            frame.appendChild(child);
        });
    }
    //apply autolayout
    frame.layoutMode = "HORIZONTAL";
    for (let child of children) {
        child.layoutAlign = "CENTER";
        child.layoutGrow = 0;
    }
    figma.currentPage.selection = [frame];
    figma.closePlugin();
};
// const itemsStretch = function () {
//   let selection = figma.currentPage.selection;
//   if (selection.length === 0) {
//     figma.closePlugin("Select at least one autolayout frame");
//   }
//   for (let shape of selection) {
//     if (shape.type === "FRAME") {
//       if (shape.layoutMode !== "NONE") {
//         const children = shape.children;
//         for (let child of children) {
//           child.layoutAlign = "STRETCH";
//         }
//       } else {
//         figma.closePlugin("Select autolayout frames only.");
//       }
//     } else {
//       figma.closePlugin("Select autolayout frames only.");
//     }
//   }
//   figma.closePlugin("Items set to stretch");
// };
const justifyBetween = function () {
    let result = "";
    let selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.closePlugin("Select at least one autolayout frame");
    }
    for (let shape of selection) {
        if (shape.type === "FRAME") {
            if (shape.layoutMode !== "NONE") {
                if (shape.primaryAxisAlignItems === "SPACE_BETWEEN") {
                    shape.primaryAxisAlignItems = "MIN";
                    result = "start";
                }
                else {
                    shape.primaryAxisAlignItems = "SPACE_BETWEEN";
                    result = "space-between";
                }
            }
            else {
                figma.closePlugin("Select autolayout frames only.");
            }
        }
        else {
            figma.closePlugin("Select autolayout frames only.");
        }
    }
    figma.closePlugin(`Items justified ${result}`);
};



/***/ }),

/***/ "./src/functions/changeSpacing.ts":
/*!****************************************!*\
  !*** ./src/functions/changeSpacing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseSpacing": () => (/* binding */ increaseSpacing),
/* harmony export */   "decreaseSpacing": () => (/* binding */ decreaseSpacing)
/* harmony export */ });
let selection = figma.currentPage.selection;
const componentKey = "8c32c8ca5ef4ba59cac6370fdda69fa90758a003";
const spaces = [
    "4",
    "8",
    "12",
    "16",
    "24",
    "32",
    "48",
    "64",
    "96",
    "128",
    "160",
    "192",
    "240",
];
const changeSpacing = function (direction) {
    for (let shape of selection) {
        let newSize;
        if (shape.type === "INSTANCE" && shape.mainComponent.key === componentKey) {
            let textLabel;
            const textWrapper = shape.children[0];
            if (textWrapper.type === "FRAME") {
                textLabel = textWrapper.children[0];
            }
            console.log(textLabel.characters);
            let currSize = textLabel.characters;
            let currIndex = spaces.indexOf(currSize);
            if (direction === "increase" && currIndex < spaces.length - 1) {
                newSize = spaces[currIndex + 1];
            }
            else if (direction === "decrease" && currIndex > 0) {
                newSize = spaces[currIndex - 1];
            }
            else {
                newSize = currSize;
            }
            shape.paddingTop = newSize / 2;
            shape.paddingRight = newSize / 2;
            shape.paddingBottom = newSize / 2;
            shape.paddingLeft = newSize / 2;
            shape.primaryAxisSizingMode = "AUTO";
            shape.counterAxisSizingMode = "AUTO";
            shape.primaryAxisAlignItems = "CENTER";
            shape.counterAxisAlignItems = "CENTER";
            figma
                .loadFontAsync({ family: "Roboto Mono", style: "Regular" })
                .then(() => {
                textLabel.setRangeFontName(0, textLabel.characters.length, {
                    family: "Roboto Mono",
                    style: "Regular",
                });
                textLabel.characters = newSize;
            })
                .catch((err) => {
                console.error(err);
            });
        }
    }
    figma.closePlugin();
};
const increaseSpacing = function () {
    changeSpacing("increase");
};
const decreaseSpacing = function () {
    changeSpacing("decrease");
};



/***/ }),

/***/ "./src/functions/clone.ts":
/*!********************************!*\
  !*** ./src/functions/clone.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": () => (/* binding */ clone)
/* harmony export */ });
//create basic clone function
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}



/***/ }),

/***/ "./src/functions/createSlices.ts":
/*!***************************************!*\
  !*** ./src/functions/createSlices.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSlices": () => (/* binding */ createSlices)
/* harmony export */ });
function pascalCase(input) {
    return (input.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join("");
}
const addSliceToFrame = function (frame, platform) {
    //remove current slice if it exists
    const children = frame.children;
    children.forEach((child) => {
        if (child.type === "SLICE") {
            child.remove();
        }
    });
    //create new slice that is the same size as frame
    const slice = figma.createSlice();
    const frameWidth = frame.width;
    const frameHeight = frame.height;
    const iconName = frame.name;
    const componentName = frame.parent.name;
    frame.appendChild(slice);
    slice.x = 0;
    slice.y = 0;
    slice.resize(frameWidth, frameHeight);
    slice.name = formatName(componentName, iconName, platform);
    if (platform === "ios") {
        slice.exportSettings = [{ format: "PDF" }];
    }
    else {
        slice.exportSettings = [{ format: "SVG" }];
    }
};
function formatName(input1, input2, output) {
    const { Size = "", ...rest } = Object.fromEntries(input2
        .trim()
        .split(",")
        .map((str) => str.trim().split("=")));
    const sanitisedName = input1
        .toLowerCase()
        .replace(/[\s/]/g, "_")
        .replace(/__+/, "_");
    const sizeUnit = output === "android" ? "dp" : output === "ios" ? "pt" : "px";
    const props = Object.values(rest)
        .map((s) => s.toLowerCase())
        .filter(Boolean);
    const values = [sanitisedName, ...props, `${Size}${sizeUnit}`].join("_");
    return output === "ios" ? pascalCase(values) : values;
}
const createSlices = function (platform) {
    let selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.closePlugin("Select at least one object");
    }
    selection.forEach((frame) => {
        if (frame.type === "COMPONENT_SET") {
            const variants = frame.children;
            variants.forEach((variant) => {
                addSliceToFrame(variant, platform);
            });
        }
        else {
            figma.closePlugin("Please only select Component Sets (the purple dotted box around variants)");
        }
    });
};



/***/ }),

/***/ "./src/functions/formatIllo.ts":
/*!*************************************!*\
  !*** ./src/functions/formatIllo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatIllo": () => (/* binding */ formatIllo)
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");


const keys = [
    "78156f8a72740bd0d9ac694b9f76ccc0062d3781",
];
const formatIllo = async function () {
    async function mapStyles() {
        const promises = keys.map(async (style) => {
            return await figma.importStyleByKeyAsync(style);
        });
        return await Promise.all(promises);
    }
    const styles = await mapStyles();
    let selection = figma.currentPage.selection;
    for (let shape of selection) {
        if (shape.type === "RECTANGLE") {
            if (shape.fills[0].type === "IMAGE") {
                if (shape.fills[0].scaleMode != "CROP") {
                    const fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(shape.fills);
                    fills[0].scaleMode = "CROP";
                    shape.fills = fills;
                }
                //make new frame
                const frame = figma.createFrame();
                //remove frame fills
                let frameFills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(frame.fills);
                frameFills = [];
                frame.fills = frameFills;
                (0,_addChildToFrame__WEBPACK_IMPORTED_MODULE_0__.addChildToFrame)(shape, frame);
                //duplicate child
                const duplicate = shape.clone();
                frame.appendChild(duplicate);
                //rename layer and tint
                shape.name = "Image";
                duplicate.name = "Tint";
                //Change tint color to black
                duplicate.fillStyleId = styles[0].id;
                //Create Mask with two layers
                shape.isMask = true;
                //clear selection
                figma.currentPage.selection = [];
            }
            else {
                figma.closePlugin("Only select nodes with single image fills.");
            }
        }
        else {
            figma.closePlugin("Only select nodes with single image fills");
        }
    }
};



/***/ }),

/***/ "./src/functions/frameScreenshot.ts":
/*!******************************************!*\
  !*** ./src/functions/frameScreenshot.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frameScreenShot": () => (/* binding */ frameScreenShot)
/* harmony export */ });
/* harmony import */ var _addChildToFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChildToFrame */ "./src/functions/addChildToFrame.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/functions/clone.ts");


const keys = [
    "41ab95be099656c241ec9adc7cf3a0c37ccde992",
    "18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81",
    "d32603c45d4423b2d9ea47bdf93633fd907340e3",
];
const frameScreenShot = async function () {
    let selection = figma.currentPage.selection;
    async function mapStyles() {
        const promises = keys.map(async (style) => {
            return await figma.importStyleByKeyAsync(style);
        });
        return await Promise.all(promises);
    }
    const styles = await mapStyles();
    for (let shape of selection) {
        if (shape.type === "RECTANGLE") {
            if (shape.fills[0].type === "IMAGE") {
                if (shape.fills[0].scaleMode != "CROP") {
                    const fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(shape.fills);
                    fills[0].scaleMode = "CROP";
                    shape.fills = fills;
                }
                //make new frame
                const frame = figma.createFrame();
                (0,_addChildToFrame__WEBPACK_IMPORTED_MODULE_0__.addChildToFrame)(shape, frame);
                frame.cornerRadius = 4;
                frame.strokeWeight = 1;
                frame.strokeStyleId = styles[1].id;
                frame.fillStyleId = styles[0].id;
                frame.effectStyleId = styles[2].id;
                frame.name = shape.name;
                shape.name = "Screenshot";
                const newSelection = (0,_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(selection);
                newSelection[0] = frame;
                figma.currentPage.selection = newSelection;
                frame.constrainProportions = true;
            }
            else {
                figma.closePlugin("Make sure your rectangle has only an image fill");
            }
        }
        else if (shape.type === "FRAME" || shape.type === "INSTANCE") {
            shape.cornerRadius = 4;
            shape.strokeWeight = 1;
            shape.strokeStyleId = styles[1].id;
            shape.fillStyleId = styles[0].id;
            shape.effectStyleId = styles[2].id;
            shape.clipsContent = true;
        }
        else {
            figma.closePlugin("Select only frames or rectangles with image fills");
        }
    }
    figma.closePlugin();
};



/***/ }),

/***/ "./src/functions/hideAnnotations.ts":
/*!******************************************!*\
  !*** ./src/functions/hideAnnotations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideAnnotations": () => (/* binding */ hideAnnotations)
/* harmony export */ });
const hideAnnotations = function () {
    const node = figma.currentPage;
    const nodes = node.findAll((node) => node.name === "$Annotation");
    nodes.forEach((node) => {
        if (node.visible === false) {
            node.visible = true;
        }
        else {
            node.visible = false;
        }
    });
};



/***/ }),

/***/ "./src/functions/setFullSize.ts":
/*!**************************************!*\
  !*** ./src/functions/setFullSize.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFullSize": () => (/* binding */ setFullSize)
/* harmony export */ });
const setFullSize = function (dimension) {
    let selection = figma.currentPage.selection;
    for (let shape of selection) {
        if (shape.type === "FRAME" ||
            shape.type === "COMPONENT" ||
            shape.type === "INSTANCE" ||
            shape.type === "VECTOR" ||
            shape.type === "STAR" ||
            shape.type === "LINE" ||
            shape.type === "ELLIPSE" ||
            shape.type === "POLYGON" ||
            shape.type === "RECTANGLE" ||
            shape.type === "TEXT") {
            const parent = shape.parent;
            if ((parent && parent.type === "FRAME") || parent.type === "COMPONENT") {
                const parentWidth = parent.width;
                const parentHeight = parent.height;
                const shapeHeight = shape.height;
                const shapeWidth = shape.width;
                const aspectRatio = shapeWidth / shapeHeight;
                //set rotation to 0
                shape.rotation = 0;
                //resize the shape
                if (dimension === "horizontal") {
                    //maintains the aspect ratio when the constrain proportions setting is applied
                    if (shape.constrainProportions) {
                        shape.resize(parentWidth, parentWidth / aspectRatio);
                    }
                    else {
                        shape.resize(parentWidth, shapeHeight);
                    }
                }
                else if (dimension === "vertical") {
                    //maintains the aspect ratio when the constrain proportions setting is applied
                    if (shape.constrainProportions) {
                        shape.resize(parentHeight * aspectRatio, parentHeight);
                    }
                    else {
                        shape.resize(shapeWidth, parentHeight);
                    }
                }
                //set the shape position to origin
                if (dimension === "horizontal") {
                    shape.x = 0;
                }
                else if (dimension === "vertical") {
                    shape.y = 0;
                }
                //find current constraints
                const currentVerticalContraint = shape.constraints.vertical;
                const currentHorizontalContraint = shape.constraints.horizontal;
                //set constraints
                if (dimension === "horizontal") {
                    shape.constraints = {
                        horizontal: "STRETCH",
                        vertical: currentVerticalContraint,
                    };
                }
                else if (dimension === "vertical") {
                    shape.constraints = {
                        horizontal: currentHorizontalContraint,
                        vertical: "STRETCH",
                    };
                }
            }
            else {
                figma.closePlugin("Selection must be nested in a frame.");
            }
        }
        else {
            figma.closePlugin("Please select something that can be resized.");
        }
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FkZENoaWxkVG9GcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2F1dG9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jaGFuZ2VTcGFjaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVTbGljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9mb3JtYXRJbGxvLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZnJhbWVTY3JlZW5zaG90LnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaGlkZUFubm90YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvc2V0RnVsbFNpemUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRjtBQUNVO0FBQ0E7QUFDTjtBQUM0QjtBQUNQO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksbUVBQVc7QUFDdkIsWUFBWSxtRUFBVztBQUN2QjtBQUNBO0FBQ0EsWUFBWSwyRUFBZTtBQUMzQjtBQUNBO0FBQ0EsWUFBWSxpRUFBVTtBQUN0QjtBQUNBO0FBQ0EsWUFBWSwyRUFBZTtBQUMzQjtBQUNBO0FBQ0EsWUFBWSxxRUFBWTtBQUN4QjtBQUNBO0FBQ0EsWUFBWSxxRUFBWTtBQUN4QjtBQUNBO0FBQ0EsWUFBWSxxRUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBVztBQUNmLElBQUksbUVBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSx5RUFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSxtRUFBWTtBQUNoQjtBQUNBO0FBQ0EsSUFBSSxrRUFBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTHJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0pqQjtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQixFQUFFLFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxLQUFLLEVBQUUsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEU0QjtBQUNwQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBSztBQUN0QztBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EOEI7QUFDcEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2Q0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7O0FDekQzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7O0FDWjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7VUMxRXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0RnVsbFNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0RnVsbFNpemVcIjtcbmltcG9ydCB7IGZvcm1hdElsbG8gfSBmcm9tIFwiLi9mdW5jdGlvbnMvZm9ybWF0SWxsb1wiO1xuaW1wb3J0IHsgZnJhbWVTY3JlZW5TaG90IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2ZyYW1lU2NyZWVuc2hvdFwiO1xuaW1wb3J0IHsgaGlkZUFubm90YXRpb25zIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2hpZGVBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NyZWF0ZVNsaWNlc1wiO1xuaW1wb3J0IHsgaXRlbXNTdHJldGNoLCBqdXN0aWZ5QmV0d2VlbiwgaXRlbXNDZW50ZXIsIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2F1dG9sYXlvdXRcIjtcbmltcG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2NoYW5nZVNwYWNpbmdcIjtcbi8vc2V0dXAgVUlcbmlmIChmaWdtYS5jb21tYW5kID09PSBcInNob3dVSVwiKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcImZ1bGxXaWR0aFwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcImhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsSGVpZ2h0XCIpIHtcbiAgICAgICAgICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJmdWxsU2l6ZVwiKSB7XG4gICAgICAgICAgICBzZXRGdWxsU2l6ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZnJhbWVTY3JlZW5zaG90XCIpIHtcbiAgICAgICAgICAgIGZyYW1lU2NyZWVuU2hvdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiZm9ybWF0SWxsb1wiKSB7XG4gICAgICAgICAgICBmb3JtYXRJbGxvKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgICAgICAgICAgaGlkZUFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJpb3NTbGljZXNcIikge1xuICAgICAgICAgICAgY3JlYXRlU2xpY2VzKFwiaW9zXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiYW5kcm9pZFNsaWNlc1wiKSB7XG4gICAgICAgICAgICBjcmVhdGVTbGljZXMoXCJhbmRyb2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwid2ViU2xpY2VzXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVNsaWNlcyhcIndlYlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBzZXQgdXAgbWVudSBjb21tYW5kc1xuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnJhbWVTY3JlZW5TaG90XCIpIHtcbiAgICBmcmFtZVNjcmVlblNob3QoKTtcbiAgICAvLyAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJoaWRlQW5ub3RhdGlvbnNcIikge1xuICAgIGhpZGVBbm5vdGF0aW9ucygpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmdWxsV2lkdGhcIikge1xuICAgIHNldEZ1bGxTaXplKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbEhlaWdodFwiKSB7XG4gICAgc2V0RnVsbFNpemUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiZnVsbFNpemVcIikge1xuICAgIHNldEZ1bGxTaXplKFwidmVydGljYWxcIik7XG4gICAgc2V0RnVsbFNpemUoXCJob3Jpem9udGFsXCIpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJmb3JtYXRJbGxvXCIpIHtcbiAgICBmb3JtYXRJbGxvKCk7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcImluY3JlYXNlU3BhY2luZ1wiKSB7XG4gICAgaW5jcmVhc2VTcGFjaW5nKCk7XG59XG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gXCJkZWNyZWFzZVNwYWNpbmdcIikge1xuICAgIGRlY3JlYXNlU3BhY2luZygpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaXRlbXNTdHJldGNoXCIpIHtcbiAgICBpdGVtc1N0cmV0Y2goKTtcbn1cbmlmIChmaWdtYS5jb21tYW5kID09PSBcIml0ZW1zQ2VudGVyXCIpIHtcbiAgICBpdGVtc0NlbnRlcigpO1xufVxuaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwianVzdGlmeUJldHdlZW5cIikge1xuICAgIGp1c3RpZnlCZXR3ZWVuKCk7XG59XG4iLCJjb25zdCBhZGRDaGlsZFRvRnJhbWUgPSBmdW5jdGlvbiAoc2hhcGUsIGZyYW1lKSB7XG4gICAgLy9jcmVhdGUgdmFyaWFibGVzXG4gICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICBjb25zdCBzaGFwZUhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICBjb25zdCBzaGFwZVBvcyA9IHNoYXBlLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIC8vYWRkIGZyYW1lIHRvIGNoaWxkJ3MgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL2FkZCBjaGlsZCB0byBmcmFtZVxuICAgIGZyYW1lLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAvLyAvL3B1dCBmcmFtZSB3aGVyZSBjaGlsZCB3YXMsIHB1dCBjaGlsZCBpbiAwLDAgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICBzaGFwZS54ID0gMDtcbiAgICBzaGFwZS55ID0gMDtcbiAgICAvL3Jlc2l6ZSBmcmFtZSB0byBjaGlsZCdzIHNpemVcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoc2hhcGVXaWR0aCwgc2hhcGVIZWlnaHQpO1xuICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcIlNDQUxFXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcIlNDQUxFXCIsXG4gICAgfTtcbn07XG5leHBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfTtcbiIsImZ1bmN0aW9uIGJpZ2dlc3ROdW1iZXJJbkFycmF5KGFycikge1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFycik7XG4gICAgcmV0dXJuIG1heDtcbn1cbmZ1bmN0aW9uIHJldHVyblRvcE9iamVjdChhcnIpIHtcbiAgICBjb25zdCBtaW4gPSBhcnIuaW5kZXhPZihNYXRoLm1pbiguLi5hcnIpKTtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIHJldHVybiBtaW47XG59XG5jb25zdCBnZXRDaGlsZHJlbkhlaWdodHMgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICBjb25zb2xlLmxvZyhyZXR1cm5Ub3BPYmplY3QoY2hpbGRyZW4pKTtcbiAgICAvL2ZpbmQgZGlmZmVyZW5jZSBiZXR3ZWVuIGJvdHRvbSBvZiBmaXJzdCBhbmQgdG9wIG9mIHNlY29uZFxuICAgIC8vICAgY29uc3QgZmlyc3RDaGlsZFRvcCA9IGNoaWxkcmVuWzBdLnk7XG4gICAgLy8gICBjb25zdCBmaXJzdENoaWxkQm90dG9tID0gZmlyc3RDaGlsZFRvcCArIGNoaWxkcmVuWzBdLmhlaWdodDtcbiAgICAvLyAgIGNvbnN0IHNlY29uZENoaWxkVG9wID0gY2hpbGRyZW5bMV0ueTtcbiAgICAvLyAgIGNvbnN0IHNlY29uZENoaWxkQm90dG9tID0gc2Vjb25kQ2hpbGRUb3AgKyBjaGlsZHJlblsxXS5oZWlnaHQ7XG4gICAgLy8gICBjb25zdCBnYXAgPVxuICAgIC8vICAgICBzZWNvbmRDaGlsZEJvdHRvbSA8IGZpcnN0Q2hpbGRUb3BcbiAgICAvLyAgICAgICA/IGZpcnN0Q2hpbGRUb3AgLSBzZWNvbmRDaGlsZEJvdHRvbVxuICAgIC8vICAgICAgIDogc2Vjb25kQ2hpbGRUb3AgLSBmaXJzdENoaWxkQm90dG9tO1xuICAgIC8vICAgcmV0dXJuIGdhcDtcbn07XG5jb25zdCBpdGVtc1N0cmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXQgbGVhc3Qgb25lIG9iamVjdFwiKTtcbiAgICB9XG4gICAgLy9nZXQgdGhlIHBhcmVudCBvZiB0aGUgZmlyc3QgY2hpbGRcbiAgICBjb25zdCBwYXJlbnQgPSBjaGlsZHJlblswXS5wYXJlbnQ7XG4gICAgbGV0IHNlY29uZFBhcmVudDtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICBzZWNvbmRQYXJlbnQgPSBjaGlsZHJlblsxXS5wYXJlbnQ7XG4gICAgfVxuICAgIC8vZ2V0IHRoZSByZWxhdGl2ZSBsb2NhdGlvbiBvZiB0aGUgZmlyc3QgY2hpbGRcbiAgICBjb25zdCBzaGFwZVBvcyA9IGNoaWxkcmVuWzBdLnJlbGF0aXZlVHJhbnNmb3JtO1xuICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAvL2FkZCB0aGUgbmV3IGZyYW1lIHRvIHRoZSBwYXJlbnRcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIC8vc2V0IHRoZSBwb3NpdGlvbiBvZiBuZXcgZnJhbWUgdG8gZmlyc3QgY2hpbGQncyBwb3NcbiAgICBmcmFtZS5yZWxhdGl2ZVRyYW5zZm9ybSA9IHNoYXBlUG9zO1xuICAgIC8vc2V0IHRoZSB3aWR0aCBvZiBuZXcgZnJhbWUgdG8gd2lkZXN0IGNoaWxkXG4gICAgY29uc3Qgd2lkdGhzID0gW107XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgd2lkdGhzLnB1c2goY2hpbGQud2lkdGgpO1xuICAgIH0pO1xuICAgIGNvbnN0IHlWYWx1ZXMgPSBbXTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICB5VmFsdWVzLnB1c2goY2hpbGQueSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWF4V2lkdGggPSBiaWdnZXN0TnVtYmVySW5BcnJheSh3aWR0aHMpO1xuICAgIGZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhtYXhXaWR0aCwgMTAwKTtcbiAgICAvL3JlbW92ZSBmcmFtZSBmaWxsXG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICAvL2FkZCBjaGlsZHJlbiB0byBmcmFtZVxuICAgIGlmIChwYXJlbnQgPT09IHNlY29uZFBhcmVudCkge1xuICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgIC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2FwcGx5IGF1dG9sYXlvdXRcbiAgICBnZXRDaGlsZHJlbkhlaWdodHMoeVZhbHVlcyk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjaGlsZC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICBjaGlsZC5sYXlvdXRHcm93ID0gMDtcbiAgICB9XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2ZyYW1lXTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbmNvbnN0IGl0ZW1zQ2VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBvYmplY3RcIik7XG4gICAgfVxuICAgIC8vZ2V0IHRoZSBwYXJlbnQgb2YgdGhlIGZpcnN0IGNoaWxkXG4gICAgY29uc3QgcGFyZW50ID0gY2hpbGRyZW5bMF0ucGFyZW50O1xuICAgIGxldCBzZWNvbmRQYXJlbnQ7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc2Vjb25kUGFyZW50ID0gY2hpbGRyZW5bMV0ucGFyZW50O1xuICAgIH1cbiAgICAvL2dldCB0aGUgcmVsYXRpdmUgbG9jYXRpb24gb2YgdGhlIGZpcnN0IGNoaWxkXG4gICAgY29uc3Qgc2hhcGVQb3MgPSBjaGlsZHJlblswXS5yZWxhdGl2ZVRyYW5zZm9ybTtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgLy9hZGQgdGhlIG5ldyBmcmFtZSB0byB0aGUgcGFyZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAvL3NldCB0aGUgcG9zaXRpb24gb2YgbmV3IGZyYW1lIHRvIGZpcnN0IGNoaWxkJ3MgcG9zXG4gICAgZnJhbWUucmVsYXRpdmVUcmFuc2Zvcm0gPSBzaGFwZVBvcztcbiAgICAvL3NldCB0aGUgd2lkdGggb2YgbmV3IGZyYW1lIHRvIHdpZGVzdCBjaGlsZFxuICAgIGNvbnN0IGhlaWdodHMgPSBbXTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBoZWlnaHRzLnB1c2goY2hpbGQuaGVpZ2h0KTtcbiAgICB9KTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBiaWdnZXN0TnVtYmVySW5BcnJheShoZWlnaHRzKTtcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoMTAwLCBtYXhIZWlnaHQpO1xuICAgIC8vcmVtb3ZlIGZyYW1lIGZpbGxcbiAgICBmcmFtZS5maWxscyA9IFtdO1xuICAgIC8vYWRkIGNoaWxkcmVuIHRvIGZyYW1lXG4gICAgaWYgKHBhcmVudCAhPT0gc2Vjb25kUGFyZW50KSB7XG4gICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vYXBwbHkgYXV0b2xheW91dFxuICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjaGlsZC5sYXlvdXRBbGlnbiA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIGNoaWxkLmxheW91dEdyb3cgPSAwO1xuICAgIH1cbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbZnJhbWVdO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuLy8gY29uc3QgaXRlbXNTdHJldGNoID0gZnVuY3Rpb24gKCkge1xuLy8gICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuLy8gICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBhdXRvbGF5b3V0IGZyYW1lXCIpO1xuLy8gICB9XG4vLyAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuLy8gICAgIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbi8vICAgICAgIGlmIChzaGFwZS5sYXlvdXRNb2RlICE9PSBcIk5PTkVcIikge1xuLy8gICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNoYXBlLmNoaWxkcmVuO1xuLy8gICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuLy8gICAgICAgICAgIGNoaWxkLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF1dG9sYXlvdXQgZnJhbWVzIG9ubHkuXCIpO1xuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlNlbGVjdCBhdXRvbGF5b3V0IGZyYW1lcyBvbmx5LlwiKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJJdGVtcyBzZXQgdG8gc3RyZXRjaFwiKTtcbi8vIH07XG5jb25zdCBqdXN0aWZ5QmV0d2VlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBhdXRvbGF5b3V0IGZyYW1lXCIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaGFwZSBvZiBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9PT0gXCJTUEFDRV9CRVRXRUVOXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJNSU5cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJzdGFydFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJTUEFDRV9CRVRXRUVOXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF1dG9sYXlvdXQgZnJhbWVzIG9ubHkuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3QgYXV0b2xheW91dCBmcmFtZXMgb25seS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oYEl0ZW1zIGp1c3RpZmllZCAke3Jlc3VsdH1gKTtcbn07XG5leHBvcnQgeyBpdGVtc1N0cmV0Y2gsIGp1c3RpZnlCZXR3ZWVuLCBpdGVtc0NlbnRlciB9O1xuIiwibGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbmNvbnN0IGNvbXBvbmVudEtleSA9IFwiOGMzMmM4Y2E1ZWY0YmE1OWNhYzYzNzBmZGRhNjlmYTkwNzU4YTAwM1wiO1xuY29uc3Qgc3BhY2VzID0gW1xuICAgIFwiNFwiLFxuICAgIFwiOFwiLFxuICAgIFwiMTJcIixcbiAgICBcIjE2XCIsXG4gICAgXCIyNFwiLFxuICAgIFwiMzJcIixcbiAgICBcIjQ4XCIsXG4gICAgXCI2NFwiLFxuICAgIFwiOTZcIixcbiAgICBcIjEyOFwiLFxuICAgIFwiMTYwXCIsXG4gICAgXCIxOTJcIixcbiAgICBcIjI0MFwiLFxuXTtcbmNvbnN0IGNoYW5nZVNwYWNpbmcgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXdTaXplO1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiICYmIHNoYXBlLm1haW5Db21wb25lbnQua2V5ID09PSBjb21wb25lbnRLZXkpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0TGFiZWw7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V3JhcHBlciA9IHNoYXBlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgaWYgKHRleHRXcmFwcGVyLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIHRleHRMYWJlbCA9IHRleHRXcmFwcGVyLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dExhYmVsLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgbGV0IGN1cnJTaXplID0gdGV4dExhYmVsLmNoYXJhY3RlcnM7XG4gICAgICAgICAgICBsZXQgY3VyckluZGV4ID0gc3BhY2VzLmluZGV4T2YoY3VyclNpemUpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpbmNyZWFzZVwiICYmIGN1cnJJbmRleCA8IHNwYWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNwYWNlc1tjdXJySW5kZXggKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkZWNyZWFzZVwiICYmIGN1cnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gc3BhY2VzW2N1cnJJbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IGN1cnJTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcGUucGFkZGluZ1RvcCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucGFkZGluZ1JpZ2h0ID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nQm90dG9tID0gbmV3U2l6ZSAvIDI7XG4gICAgICAgICAgICBzaGFwZS5wYWRkaW5nTGVmdCA9IG5ld1NpemUgLyAyO1xuICAgICAgICAgICAgc2hhcGUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBzaGFwZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIHNoYXBlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgICAgICBzaGFwZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgZmlnbWFcbiAgICAgICAgICAgICAgICAubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsLnNldFJhbmdlRm9udE5hbWUoMCwgdGV4dExhYmVsLmNoYXJhY3RlcnMubGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJSb2JvdG8gTW9ub1wiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsLmNoYXJhY3RlcnMgPSBuZXdTaXplO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuY29uc3QgaW5jcmVhc2VTcGFjaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVNwYWNpbmcoXCJpbmNyZWFzZVwiKTtcbn07XG5jb25zdCBkZWNyZWFzZVNwYWNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbmdlU3BhY2luZyhcImRlY3JlYXNlXCIpO1xufTtcbmV4cG9ydCB7IGluY3JlYXNlU3BhY2luZywgZGVjcmVhc2VTcGFjaW5nIH07XG4iLCIvL2NyZWF0ZSBiYXNpYyBjbG9uZSBmdW5jdGlvblxuZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5leHBvcnQgeyBjbG9uZSB9O1xuIiwiZnVuY3Rpb24gcGFzY2FsQ2FzZShpbnB1dCkge1xuICAgIHJldHVybiAoaW5wdXQubWF0Y2goL1thLXpBLVowLTldKy9nKSB8fCBbXSlcbiAgICAgICAgLm1hcCgodykgPT4gYCR7dy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3cuc2xpY2UoMSl9YClcbiAgICAgICAgLmpvaW4oXCJcIik7XG59XG5jb25zdCBhZGRTbGljZVRvRnJhbWUgPSBmdW5jdGlvbiAoZnJhbWUsIHBsYXRmb3JtKSB7XG4gICAgLy9yZW1vdmUgY3VycmVudCBzbGljZSBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBjaGlsZHJlbiA9IGZyYW1lLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIlNMSUNFXCIpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9jcmVhdGUgbmV3IHNsaWNlIHRoYXQgaXMgdGhlIHNhbWUgc2l6ZSBhcyBmcmFtZVxuICAgIGNvbnN0IHNsaWNlID0gZmlnbWEuY3JlYXRlU2xpY2UoKTtcbiAgICBjb25zdCBmcmFtZVdpZHRoID0gZnJhbWUud2lkdGg7XG4gICAgY29uc3QgZnJhbWVIZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XG4gICAgY29uc3QgaWNvbk5hbWUgPSBmcmFtZS5uYW1lO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBmcmFtZS5wYXJlbnQubmFtZTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZChzbGljZSk7XG4gICAgc2xpY2UueCA9IDA7XG4gICAgc2xpY2UueSA9IDA7XG4gICAgc2xpY2UucmVzaXplKGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KTtcbiAgICBzbGljZS5uYW1lID0gZm9ybWF0TmFtZShjb21wb25lbnROYW1lLCBpY29uTmFtZSwgcGxhdGZvcm0pO1xuICAgIGlmIChwbGF0Zm9ybSA9PT0gXCJpb3NcIikge1xuICAgICAgICBzbGljZS5leHBvcnRTZXR0aW5ncyA9IFt7IGZvcm1hdDogXCJQREZcIiB9XTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNsaWNlLmV4cG9ydFNldHRpbmdzID0gW3sgZm9ybWF0OiBcIlNWR1wiIH1dO1xuICAgIH1cbn07XG5mdW5jdGlvbiBmb3JtYXROYW1lKGlucHV0MSwgaW5wdXQyLCBvdXRwdXQpIHtcbiAgICBjb25zdCB7IFNpemUgPSBcIlwiLCAuLi5yZXN0IH0gPSBPYmplY3QuZnJvbUVudHJpZXMoaW5wdXQyXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKChzdHIpID0+IHN0ci50cmltKCkuc3BsaXQoXCI9XCIpKSk7XG4gICAgY29uc3Qgc2FuaXRpc2VkTmFtZSA9IGlucHV0MVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW1xccy9dL2csIFwiX1wiKVxuICAgICAgICAucmVwbGFjZSgvX18rLywgXCJfXCIpO1xuICAgIGNvbnN0IHNpemVVbml0ID0gb3V0cHV0ID09PSBcImFuZHJvaWRcIiA/IFwiZHBcIiA6IG91dHB1dCA9PT0gXCJpb3NcIiA/IFwicHRcIiA6IFwicHhcIjtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC52YWx1ZXMocmVzdClcbiAgICAgICAgLm1hcCgocykgPT4gcy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtzYW5pdGlzZWROYW1lLCAuLi5wcm9wcywgYCR7U2l6ZX0ke3NpemVVbml0fWBdLmpvaW4oXCJfXCIpO1xuICAgIHJldHVybiBvdXRwdXQgPT09IFwiaW9zXCIgPyBwYXNjYWxDYXNlKHZhbHVlcykgOiB2YWx1ZXM7XG59XG5jb25zdCBjcmVhdGVTbGljZXMgPSBmdW5jdGlvbiAocGxhdGZvcm0pIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBvYmplY3RcIik7XG4gICAgfVxuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZnJhbWUudHlwZSA9PT0gXCJDT01QT05FTlRfU0VUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRzID0gZnJhbWUuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXJpYW50cy5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkU2xpY2VUb0ZyYW1lKHZhcmlhbnQsIHBsYXRmb3JtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJQbGVhc2Ugb25seSBzZWxlY3QgQ29tcG9uZW50IFNldHMgKHRoZSBwdXJwbGUgZG90dGVkIGJveCBhcm91bmQgdmFyaWFudHMpXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgY3JlYXRlU2xpY2VzIH07XG4iLCJpbXBvcnQgeyBhZGRDaGlsZFRvRnJhbWUgfSBmcm9tIFwiLi9hZGRDaGlsZFRvRnJhbWVcIjtcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmNvbnN0IGtleXMgPSBbXG4gICAgXCI3ODE1NmY4YTcyNzQwYmQwZDlhYzY5NGI5Zjc2Y2NjMDA2MmQzNzgxXCIsXG5dO1xuY29uc3QgZm9ybWF0SWxsbyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhc3luYyBmdW5jdGlvbiBtYXBTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoYXN5bmMgKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlcyA9IGF3YWl0IG1hcFN0eWxlcygpO1xuICAgIGxldCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgZnJhbWUgZmlsbHNcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVGaWxscyA9IGNsb25lKGZyYW1lLmZpbGxzKTtcbiAgICAgICAgICAgICAgICBmcmFtZUZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgZnJhbWUuZmlsbHMgPSBmcmFtZUZpbGxzO1xuICAgICAgICAgICAgICAgIGFkZENoaWxkVG9GcmFtZShzaGFwZSwgZnJhbWUpO1xuICAgICAgICAgICAgICAgIC8vZHVwbGljYXRlIGNoaWxkXG4gICAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlID0gc2hhcGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkdXBsaWNhdGUpO1xuICAgICAgICAgICAgICAgIC8vcmVuYW1lIGxheWVyIGFuZCB0aW50XG4gICAgICAgICAgICAgICAgc2hhcGUubmFtZSA9IFwiSW1hZ2VcIjtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUubmFtZSA9IFwiVGludFwiO1xuICAgICAgICAgICAgICAgIC8vQ2hhbmdlIHRpbnQgY29sb3IgdG8gYmxhY2tcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgTWFzayB3aXRoIHR3byBsYXllcnNcbiAgICAgICAgICAgICAgICBzaGFwZS5pc01hc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIk9ubHkgc2VsZWN0IG5vZGVzIHdpdGggc2luZ2xlIGltYWdlIGZpbGxzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiT25seSBzZWxlY3Qgbm9kZXMgd2l0aCBzaW5nbGUgaW1hZ2UgZmlsbHNcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgZm9ybWF0SWxsbyB9O1xuIiwiaW1wb3J0IHsgYWRkQ2hpbGRUb0ZyYW1lIH0gZnJvbSBcIi4vYWRkQ2hpbGRUb0ZyYW1lXCI7XG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5jb25zdCBrZXlzID0gW1xuICAgIFwiNDFhYjk1YmUwOTk2NTZjMjQxZWM5YWRjN2NmM2EwYzM3Y2NkZTk5MlwiLFxuICAgIFwiMThiMGNhNGQzZTczNjlkMGRmNmU3MjBiZGZlODlhZTAzZmQ0OGU4MVwiLFxuICAgIFwiZDMyNjAzYzQ1ZDQ0MjNiMmQ5ZWE0N2JkZjkzNjMzZmQ5MDczNDBlM1wiLFxuXTtcbmNvbnN0IGZyYW1lU2NyZWVuU2hvdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcFN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcChhc3luYyAoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzID0gYXdhaXQgbWFwU3R5bGVzKCk7XG4gICAgZm9yIChsZXQgc2hhcGUgb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuZmlsbHNbMF0udHlwZSA9PT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlLmZpbGxzWzBdLnNjYWxlTW9kZSAhPSBcIkNST1BcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGNsb25lKHNoYXBlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0uc2NhbGVNb2RlID0gXCJDUk9QXCI7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbWFrZSBuZXcgZnJhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgYWRkQ2hpbGRUb0ZyYW1lKHNoYXBlLCBmcmFtZSk7XG4gICAgICAgICAgICAgICAgZnJhbWUuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgICAgICAgICBmcmFtZS5zdHJva2VXZWlnaHQgPSAxO1xuICAgICAgICAgICAgICAgIGZyYW1lLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuZmlsbFN0eWxlSWQgPSBzdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgZnJhbWUuZWZmZWN0U3R5bGVJZCA9IHN0eWxlc1syXS5pZDtcbiAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gc2hhcGUubmFtZTtcbiAgICAgICAgICAgICAgICBzaGFwZS5uYW1lID0gXCJTY3JlZW5zaG90XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gY2xvbmUoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3Rpb25bMF0gPSBmcmFtZTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgZnJhbWUuY29uc3RyYWluUHJvcG9ydGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJNYWtlIHN1cmUgeW91ciByZWN0YW5nbGUgaGFzIG9ubHkgYW4gaW1hZ2UgZmlsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcIkZSQU1FXCIgfHwgc2hhcGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICBzaGFwZS5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICAgICAgc2hhcGUuc3Ryb2tlV2VpZ2h0ID0gMTtcbiAgICAgICAgICAgIHNoYXBlLnN0cm9rZVN0eWxlSWQgPSBzdHlsZXNbMV0uaWQ7XG4gICAgICAgICAgICBzaGFwZS5maWxsU3R5bGVJZCA9IHN0eWxlc1swXS5pZDtcbiAgICAgICAgICAgIHNoYXBlLmVmZmVjdFN0eWxlSWQgPSBzdHlsZXNbMl0uaWQ7XG4gICAgICAgICAgICBzaGFwZS5jbGlwc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJTZWxlY3Qgb25seSBmcmFtZXMgb3IgcmVjdGFuZ2xlcyB3aXRoIGltYWdlIGZpbGxzXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuZXhwb3J0IHsgZnJhbWVTY3JlZW5TaG90IH07XG4iLCJjb25zdCBoaWRlQW5ub3RhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUgPT09IFwiJEFubm90YXRpb25cIik7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgaGlkZUFubm90YXRpb25zIH07XG4iLCJjb25zdCBzZXRGdWxsU2l6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24pIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IHNoYXBlIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiVkVDVE9SXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiU1RBUlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIkxJTkVcIiB8fFxuICAgICAgICAgICAgc2hhcGUudHlwZSA9PT0gXCJFTExJUFNFXCIgfHxcbiAgICAgICAgICAgIHNoYXBlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgICAgICAgICBzaGFwZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gc2hhcGUucGFyZW50O1xuICAgICAgICAgICAgaWYgKChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IFwiRlJBTUVcIikgfHwgcGFyZW50LnR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudC53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHNoYXBlV2lkdGggLyBzaGFwZUhlaWdodDtcbiAgICAgICAgICAgICAgICAvL3NldCByb3RhdGlvbiB0byAwXG4gICAgICAgICAgICAgICAgc2hhcGUucm90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIC8vcmVzaXplIHRoZSBzaGFwZVxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gd2hlbiB0aGUgY29uc3RyYWluIHByb3BvcnRpb25zIHNldHRpbmcgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUuY29uc3RyYWluUHJvcG9ydGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnJlc2l6ZShwYXJlbnRXaWR0aCwgcGFyZW50V2lkdGggLyBhc3BlY3RSYXRpbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50V2lkdGgsIHNoYXBlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICAvL21haW50YWlucyB0aGUgYXNwZWN0IHJhdGlvIHdoZW4gdGhlIGNvbnN0cmFpbiBwcm9wb3J0aW9ucyBzZXR0aW5nIGlzIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlLmNvbnN0cmFpblByb3BvcnRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUocGFyZW50SGVpZ2h0ICogYXNwZWN0UmF0aW8sIHBhcmVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNpemUoc2hhcGVXaWR0aCwgcGFyZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NldCB0aGUgc2hhcGUgcG9zaXRpb24gdG8gb3JpZ2luXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUueCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpbWVuc2lvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2ZpbmQgY3VycmVudCBjb25zdHJhaW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWZXJ0aWNhbENvbnRyYWludCA9IHNoYXBlLmNvbnN0cmFpbnRzLnZlcnRpY2FsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIb3Jpem9udGFsQ29udHJhaW50ID0gc2hhcGUuY29uc3RyYWludHMuaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAvL3NldCBjb25zdHJhaW50c1xuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogY3VycmVudFZlcnRpY2FsQ29udHJhaW50LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaW1lbnNpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5jb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGN1cnJlbnRIb3Jpem9udGFsQ29udHJhaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwiU1RSRVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiU2VsZWN0aW9uIG11c3QgYmUgbmVzdGVkIGluIGEgZnJhbWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJQbGVhc2Ugc2VsZWN0IHNvbWV0aGluZyB0aGF0IGNhbiBiZSByZXNpemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBzZXRGdWxsU2l6ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==