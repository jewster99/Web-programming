
let root = document.querySelector('.root');
let offset = 10;

for(let elem of structure) {
  createStructure(elem);
}

function createFolder(stage, obj, par){
    let ico = document.createElement('span');
        ico.setAttribute('class', 'ico');
    let name = document.createElement('span');
    name.innerText = obj.title;
    
  let folder = document.createElement('div');
      folder.setAttribute('class', 'folder');
      folder.style.cssText = `margin-left: ${offset * stage}px`;
      if(stage !== 0) folder.style.display = 'none';
      
      folder.appendChild(ico);
      folder.appendChild(name);
      
      
  return folder;
}

function createFile(stage, obj){
  let file = document.createElement('div');
      file.setAttribute('class', 'file');
      file.style.cssText = `margin-left: ${offset * stage}px`;
      file.innerText = obj.title;
      if(stage !== 0) file.style.display = 'none';
      
  return file;
}

function appendElem(elem) {

    root.appendChild(elem);
}

function createStructure(obj, stage=0, par=null) {
    if(obj.folder === true) {
        let folder = createFolder(stage, obj);
        if (par !== null) {
            par.appendChild(folder)
        } else {
            appendElem(folder);

        }

        if ( obj.children ) {
            for(let child of obj.children) {
                createStructure(child, stage+1, folder);
            }
        }
        
        
    } else if (obj.folder === false || obj.folder === undefined ) {
        let file = createFile(stage, obj);
        if (par !== null) {
            par.appendChild(file)
        } else {
            appendElem(file);

        }
     
    } else {
        return;
    }


}

let folders = document.querySelectorAll('.folder');
for(let folder of folders) {
    folder.onclick = function(e) {
        let current = e.currentTarget;
        if (current.children.length > 2) {
            for (let i = 2; i <= current.children.length; i++) {
                current.children[i].style.display = 'block';
            }
        }
    }
}