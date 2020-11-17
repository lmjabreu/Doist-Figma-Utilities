(()=>{"use strict";const e=function(e){let i=figma.currentPage.selection;for(let t of i)if("FRAME"===t.type||"COMPONENT"===t.type||"INSTANCE"===t.type||"VECTOR"===t.type||"STAR"===t.type||"LINE"===t.type||"ELLIPSE"===t.type||"POLYGON"===t.type||"RECTANGLE"===t.type||"TEXT"===t.type){const i=t.parent;if(i&&"FRAME"===i.type){const l=i.width,n=i.height,a=t.height,o=t.width;t.rotation=0,"horizontal"===e?t.resize(l,a):"vertical"===e&&t.resize(o,n),"horizontal"===e?t.x=0:"vertical"===e&&(t.y=0);const s=t.constraints.vertical,f=t.constraints.horizontal;"horizontal"===e?t.constraints={horizontal:"STRETCH",vertical:s}:"vertical"===e&&(t.constraints={horizontal:f,vertical:"STRETCH"})}else figma.closePlugin("Selection must be nested in a frame.")}else figma.closePlugin("Please select something that can be resized.")},i=function(e,i){const t=e.parent,l=e.width,n=e.height,a=e.relativeTransform;t.appendChild(i),i.appendChild(e),i.relativeTransform=a,e.x=0,e.y=0,i.resizeWithoutConstraints(l,n),e.constraints={horizontal:"SCALE",vertical:"SCALE"}};function t(e){return JSON.parse(JSON.stringify(e))}const l=function(){let e=figma.currentPage.selection;for(let l of e)if("RECTANGLE"===l.type)if("IMAGE"===l.fills[0].type){if("CROP"!=l.fills[0].scaleMode){const e=t(l.fills);e[0].scaleMode="CROP",l.fills=e}const e=figma.createFrame();let n=t(e.fills);n=[],e.fills=n,i(l,e);const a=l.clone();e.appendChild(a),l.name="Image",a.name="Tint",a.fillStyleId="S:78156f8a72740bd0d9ac694b9f76ccc0062d3781,762:8",l.isMask=!0,l.locked=!0,figma.currentPage.selection=[]}else figma.closePlugin("Only select nodes with single image fills.");else figma.closePlugin("Only select nodes with single image fills")},n=function(){let e=figma.currentPage.selection;for(let l of e)if("RECTANGLE"===l.type)if("IMAGE"===l.fills[0].type){if("CROP"!=l.fills[0].scaleMode){const e=t(l.fills);e[0].scaleMode="CROP",l.fills=e}const n=figma.createFrame();i(l,n),n.strokeWeight=1,n.fills=[],n.strokeStyleId="S:18b0ca4d3e7369d0df6e720bdfe89ae03fd48e81,1077:2",n.cornerRadius=4,n.effectStyleId="S:d32603c45d4423b2d9ea47bdf93633fd907340e3,659:1",n.name=l.name,l.name="Screenshot";const a=t(e);a[0]=n,figma.currentPage.selection=a,n.constrainProportions=!0}else figma.closePlugin("Select only rectangles with image fills");else figma.closePlugin("Select only rectangles with image fills")},a=function(){figma.currentPage.findAll((e=>"$Annotation"===e.name)).forEach((e=>{!1===e.visible?e.visible=!0:e.visible=!1}))};"showUI"===figma.command&&(figma.showUI(__html__),figma.ui.onmessage=i=>{if("fullWidth"===i)e("horizontal");else if("fullHeight"===i)e("vertical");else if("fullSize"===i)e("vertical"),e("horizontal");else if("frameScreenshot"===i)n();else if("formatIllo"===i)l();else{if("hideAnnotations"!==i)return;a()}}),"frameScreenShot"===figma.command&&(n(),figma.closePlugin()),"hideAnnotations"===figma.command&&(a(),figma.closePlugin()),"fullWidth"===figma.command&&(e("horizontal"),figma.closePlugin()),"fullHeight"===figma.command&&(e("vertical"),figma.closePlugin()),"formatIllo"===figma.command&&(l(),figma.closePlugin())})();