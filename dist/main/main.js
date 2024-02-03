#!/usr/bin/env node
var $3rgoX$boxen = require("boxen");
var $3rgoX$chalk = require("chalk");
var $3rgoX$yargs = require("yargs");
var $3rgoX$yargshelpers = require("yargs/helpers");
var $3rgoX$path = require("path");
var $3rgoX$fs = require("fs");
var $3rgoX$inquirer = require("inquirer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



const $7c3a3c66cfef1e62$var$args = (0, $3rgoX$yargshelpers.hideBin)(process.argv);
const $7c3a3c66cfef1e62$export$939799c7582f469e = {
    yargs: ($parcel$interopDefault($3rgoX$yargs)),
    args: $7c3a3c66cfef1e62$var$args,
    inputCommand: $7c3a3c66cfef1e62$var$args[0]
};






var $455c7b2d426f04af$export$80729fed35a16515;
(function($455c7b2d426f04af$export$80729fed35a16515) {
    $455c7b2d426f04af$export$80729fed35a16515["src"] = "src";
    $455c7b2d426f04af$export$80729fed35a16515["hooks"] = "hooks";
    $455c7b2d426f04af$export$80729fed35a16515["components"] = "components";
    $455c7b2d426f04af$export$80729fed35a16515["store"] = "redux-store";
    $455c7b2d426f04af$export$80729fed35a16515["reducers"] = "reducers";
    $455c7b2d426f04af$export$80729fed35a16515["app"] = "app";
    $455c7b2d426f04af$export$80729fed35a16515["pages"] = "pages";
    $455c7b2d426f04af$export$80729fed35a16515["widgets"] = "widgets";
    $455c7b2d426f04af$export$80729fed35a16515["features"] = "features";
    $455c7b2d426f04af$export$80729fed35a16515["entities"] = "entities";
    $455c7b2d426f04af$export$80729fed35a16515["shared"] = "shared";
    $455c7b2d426f04af$export$80729fed35a16515["providers"] = "providers";
    $455c7b2d426f04af$export$80729fed35a16515["ui"] = "ui";
    $455c7b2d426f04af$export$80729fed35a16515["assets"] = "assets";
    $455c7b2d426f04af$export$80729fed35a16515["lib"] = "lib";
    $455c7b2d426f04af$export$80729fed35a16515["api"] = "api";
    $455c7b2d426f04af$export$80729fed35a16515["config"] = "config";
    $455c7b2d426f04af$export$80729fed35a16515["types"] = "types";
    $455c7b2d426f04af$export$80729fed35a16515["model"] = "model";
    $455c7b2d426f04af$export$80729fed35a16515["helpers"] = "helpers";
})($455c7b2d426f04af$export$80729fed35a16515 || ($455c7b2d426f04af$export$80729fed35a16515 = {}));
var $455c7b2d426f04af$export$c7b1f493e6a94639;
(function($455c7b2d426f04af$export$c7b1f493e6a94639) {
    $455c7b2d426f04af$export$c7b1f493e6a94639["app"] = "app";
    $455c7b2d426f04af$export$c7b1f493e6a94639["pages"] = "pages";
    $455c7b2d426f04af$export$c7b1f493e6a94639["widgets"] = "widgets";
    $455c7b2d426f04af$export$c7b1f493e6a94639["features"] = "features";
    $455c7b2d426f04af$export$c7b1f493e6a94639["entities"] = "entities";
    $455c7b2d426f04af$export$c7b1f493e6a94639["shared"] = "shared";
})($455c7b2d426f04af$export$c7b1f493e6a94639 || ($455c7b2d426f04af$export$c7b1f493e6a94639 = {}));
var $455c7b2d426f04af$export$50c0a6118f621008;
(function($455c7b2d426f04af$export$50c0a6118f621008) {
    $455c7b2d426f04af$export$50c0a6118f621008["ui"] = "ui";
    $455c7b2d426f04af$export$50c0a6118f621008["assets"] = "assets";
    $455c7b2d426f04af$export$50c0a6118f621008["lib"] = "lib";
    $455c7b2d426f04af$export$50c0a6118f621008["api"] = "api";
    $455c7b2d426f04af$export$50c0a6118f621008["config"] = "config";
    $455c7b2d426f04af$export$50c0a6118f621008["types"] = "types";
    $455c7b2d426f04af$export$50c0a6118f621008["model"] = "model";
    $455c7b2d426f04af$export$50c0a6118f621008["helpers"] = "helpers";
})($455c7b2d426f04af$export$50c0a6118f621008 || ($455c7b2d426f04af$export$50c0a6118f621008 = {}));
const $455c7b2d426f04af$export$6352c5df738e769d = Object.values($455c7b2d426f04af$export$c7b1f493e6a94639);
const $455c7b2d426f04af$export$6acffae9f23fd988 = Object.values($455c7b2d426f04af$export$50c0a6118f621008);
const $455c7b2d426f04af$export$a12cb77cbb76ad4e = (0, $3rgoX$path.join)("src", "pages");
const $455c7b2d426f04af$export$f9e5b02402e0f430 = (0, $3rgoX$path.join)("src", "redux-store");
const $455c7b2d426f04af$export$e3852490c78bdb2d = "index.ts";
const $455c7b2d426f04af$export$1e2fb23429d7dca1 = "reacling.json";
var $455c7b2d426f04af$export$96e9906d6d93a972;
(function($455c7b2d426f04af$export$96e9906d6d93a972) {
    $455c7b2d426f04af$export$96e9906d6d93a972["success"] = "success";
    $455c7b2d426f04af$export$96e9906d6d93a972["error"] = "error";
    $455c7b2d426f04af$export$96e9906d6d93a972["info"] = "info";
})($455c7b2d426f04af$export$96e9906d6d93a972 || ($455c7b2d426f04af$export$96e9906d6d93a972 = {}));
const $455c7b2d426f04af$export$6f98e8eaf0be1996 = {
    top: 0,
    bottom: 0,
    left: 2,
    right: 0
};



const $8245c57573ffcd34$export$e4c1c20db325e281 = (str)=>{
    return str.at(-1) === "s" ? str.slice(0, -1) : str;
};




var $cacf04c761edf4f4$export$1c47a6dffe5d0c40;
(function($cacf04c761edf4f4$export$1c47a6dffe5d0c40) {
    $cacf04c761edf4f4$export$1c47a6dffe5d0c40["simple"] = "simple";
    $cacf04c761edf4f4$export$1c47a6dffe5d0c40["fsd"] = "fsd";
})($cacf04c761edf4f4$export$1c47a6dffe5d0c40 || ($cacf04c761edf4f4$export$1c47a6dffe5d0c40 = {}));


const $6eb1380284c5ccc2$var$boxenConfig = (title)=>({
        title: title,
        titleAlignment: "center",
        borderColor: "blueBright"
    });
const $6eb1380284c5ccc2$var$REACT_COMMANDS = (0, ($parcel$interopDefault($3rgoX$boxen)))(`
  Generate a component:              c  'component name' 
  Generate a page:                   p  'page name' 
  Generate a hook:                   h  'hook name' 
  Generate a config file:            config
  Get help:                          --help 
  `, $6eb1380284c5ccc2$var$boxenConfig("React commands"));
const $6eb1380284c5ccc2$export$730c9484e2d5065f = (0, ($parcel$interopDefault($3rgoX$boxen)))(`
  Generate FSD structure:            init
  Generate a page:                   p    'page name' 
  Generate a widget:                 w    'widget name' 
  Generate a entity:                 e    'entity name' 
  Generate a feature:                f    'feature name' 
  Generate a component for shared:   su   'component name'
  Generate a component for entity:   eu   'entity name' 'component name' 
  Generate a component for feature:  fu   'feature name' 'component name'
  Generate a config file:            config 
  Get help:                          --help 
  `, $6eb1380284c5ccc2$var$boxenConfig("FSD react commands"));
const $6eb1380284c5ccc2$export$cede4fa93e6f1d4b = (methodology)=>{
    switch(methodology){
        case (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).simple:
            console.log($6eb1380284c5ccc2$var$REACT_COMMANDS);
            break;
        case (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).fsd:
            console.log($6eb1380284c5ccc2$export$730c9484e2d5065f);
            break;
        default:
            break;
    }
};


const $6351d43dc6947058$export$8e831c751a9f504f = (str)=>str.charAt(0).toUpperCase() + str.slice(1);


const $b0647299f7af8442$export$86f54f62aa7a7514 = (str)=>str.split("-").map((word, i)=>i !== 0 ? (0, $6351d43dc6947058$export$8e831c751a9f504f)(word) : word).join("");





const $2c558671534c45c6$export$3fcbae923641c6e6 = (path)=>{
    return path.replaceAll(/\\/g, "/");
};


const $71fc308ccb57d50f$var$isSuccess = (status)=>status === (0, $455c7b2d426f04af$export$96e9906d6d93a972).success;
class $71fc308ccb57d50f$var$Logger {
    #successLogs = [];
    #errorLogs = [];
    #commonLogs = [];
    log(status, log) {}
    pushLog(status, log) {
        const transformedLog = (0, $2c558671534c45c6$export$3fcbae923641c6e6)(log);
        $71fc308ccb57d50f$var$isSuccess(status) ? this.#successLogs.push(transformedLog) : this.#errorLogs.push(transformedLog);
    }
    pushCommonLog(log) {
        this.#commonLogs.push((0, $2c558671534c45c6$export$3fcbae923641c6e6)(log));
    }
    pushErrorLog(log) {
        this.pushLog((0, $455c7b2d426f04af$export$96e9906d6d93a972).error, (0, $2c558671534c45c6$export$3fcbae923641c6e6)(log));
    }
    pushSuccessLog(log) {
        this.pushLog((0, $455c7b2d426f04af$export$96e9906d6d93a972).success, (0, $2c558671534c45c6$export$3fcbae923641c6e6)(log));
    }
    pushAlreadyExistLog(name, message = "") {
        this.pushLog((0, $455c7b2d426f04af$export$96e9906d6d93a972).error, `${(0, ($parcel$interopDefault($3rgoX$chalk))).underline.italic(name)} ${(0, $8245c57573ffcd34$export$e4c1c20db325e281)(message)} is already exist!`);
    }
    pushNotExistLog(name, message = "") {
        this.pushLog((0, $455c7b2d426f04af$export$96e9906d6d93a972).error, `${(0, ($parcel$interopDefault($3rgoX$chalk))).underline.italic(name)} ${message} is not exist!`);
    }
    pushUnknownCommandLog(command) {
        this.pushLog((0, $455c7b2d426f04af$export$96e9906d6d93a972).error, `Unknown command "${(0, ($parcel$interopDefault($3rgoX$chalk))).italic(command)}"!`);
    }
    writeHelp(methodology) {
        (0, $6eb1380284c5ccc2$export$cede4fa93e6f1d4b)(methodology);
    }
    writeLogs() {
        if (this.#successLogs.length > 0) this.#successLog(this.#getLogs((0, $455c7b2d426f04af$export$96e9906d6d93a972).success));
        if (this.#errorLogs.length > 0) this.#errorLog(this.#getLogs((0, $455c7b2d426f04af$export$96e9906d6d93a972).error));
        if (this.#commonLogs.length > 0) console.log(this.#getLogs());
    }
    #getLogs(status) {
        if (!status) return this.#commonLogs.join("\n");
        return $71fc308ccb57d50f$var$isSuccess(status) ? this.#successLogs.join("\n") : this.#errorLogs.join("\n");
    }
    #errorLog(content) {
        console.log((0, ($parcel$interopDefault($3rgoX$boxen)))((0, ($parcel$interopDefault($3rgoX$chalk))).redBright(`${content}`), {
            title: `${(0, $6351d43dc6947058$export$8e831c751a9f504f)((0, $455c7b2d426f04af$export$96e9906d6d93a972).error)}:`,
            padding: $455c7b2d426f04af$export$6f98e8eaf0be1996,
            borderColor: "red"
        }));
    }
    #successLog(content) {
        console.log((0, ($parcel$interopDefault($3rgoX$boxen)))((0, ($parcel$interopDefault($3rgoX$chalk))).greenBright(content), {
            title: `${(0, $6351d43dc6947058$export$8e831c751a9f504f)((0, $455c7b2d426f04af$export$96e9906d6d93a972).success)}:`,
            padding: $455c7b2d426f04af$export$6f98e8eaf0be1996,
            borderColor: "green"
        }));
    }
}
const $71fc308ccb57d50f$export$af88d00dbe7f521 = new $71fc308ccb57d50f$var$Logger();






function $2ef6f1e4eeb9cbda$var$isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
const $2ef6f1e4eeb9cbda$export$6969335ea1e4e77c = (target, source)=>{
    const targetClone = structuredClone(target);
    if (!source) return targetClone;
    if (!$2ef6f1e4eeb9cbda$var$isObject(targetClone) || !$2ef6f1e4eeb9cbda$var$isObject(source)) return targetClone;
    for(const key in source){
        if (!$2ef6f1e4eeb9cbda$var$isObject(source[key])) {
            targetClone[key] = source[key];
            continue;
        }
        if (!targetClone[key]) targetClone[key] = {};
        $2ef6f1e4eeb9cbda$export$6969335ea1e4e77c(targetClone[key], source[key]);
    }
    return targetClone;
};




const $a5fae089d8d023d5$export$2563b75681f602ab = (upFolderCount)=>(0, $3rgoX$path.join)(...Array(upFolderCount).fill(".."));



const $7da022dfb63891de$export$f84bd70098573c5c = {
    methodology: (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).fsd,
    fsdStructure: {
        app: {
            withProviders: true
        },
        pages: {
            withLib: true,
            withUi: true
        },
        widgets: {
            withLib: true,
            withUi: true
        },
        features: {
            withApi: true,
            withLib: true,
            withModel: true,
            withUi: true
        },
        entities: {
            withApi: true,
            withLib: true,
            withModel: true,
            withUi: true
        }
    }
};



var $8ace22e476d890fc$var$$parcel$__dirname = $3rgoX$path.resolve(__dirname, "../../services/config");
class $8ace22e476d890fc$export$1a7732fb77cdf7b8 {
    #config;
    #userConfigPath = (0, $3rgoX$path.join)($8ace22e476d890fc$var$$parcel$__dirname, (0, $a5fae089d8d023d5$export$2563b75681f602ab)(4), (0, $455c7b2d426f04af$export$1e2fb23429d7dca1));
    #innerConfigPath = (0, $3rgoX$path.join)($8ace22e476d890fc$var$$parcel$__dirname, (0, $a5fae089d8d023d5$export$2563b75681f602ab)(2), (0, $455c7b2d426f04af$export$1e2fb23429d7dca1));
    constructor(){
        this.#config = (0, $2ef6f1e4eeb9cbda$export$6969335ea1e4e77c)(this.defaultConfig, this.userConfig ?? {});
    }
    #readConfig(path) {
        return JSON.parse((0, $3rgoX$fs.readFileSync)(path, "utf8"));
    }
    get userConfig() {
        return this.#readConfig(this.#userConfigPath);
    }
    get innerConfig() {
        return this.#readConfig(this.#innerConfigPath);
    }
    get defaultConfig() {
        return 0, $7da022dfb63891de$export$f84bd70098573c5c;
    }
    changeMethodology(methodology) {
        const innerConfig = this.defaultConfig;
        innerConfig.methodology = methodology;
        this.overwriteInnerConfig(innerConfig);
    }
    overwriteInnerConfig(newConfig) {
        (0, $3rgoX$fs.writeFileSync)(this.#innerConfigPath, JSON.stringify(newConfig, null, 2));
    }
    overwriteUserConfig(newConfig) {
        (0, $3rgoX$fs.writeFileSync)(this.#userConfigPath, JSON.stringify(newConfig, null, 2));
    }
    get methodology() {
        return this.#config.methodology;
    }
    getSliceConfig(layer) {
        return this.#config.fsdStructure[layer];
    }
    getAppConfig() {
        return this.#config.fsdStructure.app;
    }
}


const $67e5b0ba4c8bb956$export$f60151a8e92c6a2d = new (0, $8ace22e476d890fc$export$1a7732fb77cdf7b8)();






async function $61d5eb6dc78196e8$export$70efa17eab43b3a4() {
    return (await $3rgoX$inquirer).default.prompt;
}


async function $b8b1b19034fcb4c3$export$c9523dd6ef6726d1() {
    const prompt = await (0, $61d5eb6dc78196e8$export$70efa17eab43b3a4)();
    const { methodology: methodology } = await prompt([
        {
            name: "methodology",
            message: "Witch methodology you prefer:",
            type: "list",
            choices: [
                (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).fsd,
                (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).simple
            ]
        }
    ]);
    return methodology;
}




var $08cead3d60cbb030$export$c76e23a66cfa67a2;
(function($08cead3d60cbb030$export$c76e23a66cfa67a2) {
    $08cead3d60cbb030$export$c76e23a66cfa67a2["y"] = "Yes";
    $08cead3d60cbb030$export$c76e23a66cfa67a2["n"] = "No";
})($08cead3d60cbb030$export$c76e23a66cfa67a2 || ($08cead3d60cbb030$export$c76e23a66cfa67a2 = {}));
const $08cead3d60cbb030$export$c8218c84dc48e6d7 = [
    "Yes",
    "No"
];
const $08cead3d60cbb030$export$d926603b49c2928f = {
    Yes: true,
    No: false
};







function $41eafaafe1b80cde$export$96cea914d6f3fc4c(chosenSegmentsFolders) {
    return chosenSegmentsFolders.reduce((config, segmentFolder)=>{
        const configKey = `with${(0, $6351d43dc6947058$export$8e831c751a9f504f)(segmentFolder)}`;
        config[configKey] = true;
        return config;
    }, {});
}


async function $88523048ec1b3719$export$8dea8c153cbeaae5(layerFolder) {
    const prompt = await (0, $61d5eb6dc78196e8$export$70efa17eab43b3a4)();
    const message = `Select folders that will be includes in the ${layerFolder} slice folder:`;
    if (layerFolder === (0, $455c7b2d426f04af$export$c7b1f493e6a94639).app) {
        const { chosenSegmentsFolders: chosenSegmentsFolders } = await prompt([
            {
                name: "chosenSegmentsFolders",
                message: message,
                type: "checkbox",
                choices: [
                    {
                        name: (0, $455c7b2d426f04af$export$80729fed35a16515).providers
                    }
                ]
            }
        ]);
        return (0, $41eafaafe1b80cde$export$96cea914d6f3fc4c)(chosenSegmentsFolders);
    }
    const { chosenSegmentsFolders: chosenSegmentsFolders } = await prompt([
        {
            name: "chosenSegmentsFolders",
            message: message,
            type: "checkbox",
            choices: (0, $455c7b2d426f04af$export$6acffae9f23fd988).map((segment)=>({
                    name: segment
                }))
        }
    ]);
    return (0, $41eafaafe1b80cde$export$96cea914d6f3fc4c)(chosenSegmentsFolders);
}


async function $c620b3fb639bc0bc$export$4d83a5d5471b25f(fsdStructure) {
    const prompt = await (0, $61d5eb6dc78196e8$export$70efa17eab43b3a4)();
    const config = {};
    const layersFoldersWithoutShared = (0, $455c7b2d426f04af$export$6352c5df738e769d).filter((layerFolder)=>layerFolder !== (0, $455c7b2d426f04af$export$c7b1f493e6a94639).shared);
    for(let i = 0; i < layersFoldersWithoutShared.length; i++){
        const layerFolder = layersFoldersWithoutShared[i];
        const { isProvideOwnStructure: isProvideOwnStructure } = await prompt([
            {
                name: "isProvideOwnStructure",
                message: `Provide your own structure for ${layerFolder}:`,
                type: "list",
                choices: (0, $08cead3d60cbb030$export$c8218c84dc48e6d7),
                filter: (input)=>(0, $08cead3d60cbb030$export$d926603b49c2928f)[input]
            }
        ]);
        if (isProvideOwnStructure) config[layerFolder] = await (0, $88523048ec1b3719$export$8dea8c153cbeaae5)(layerFolder);
        else config[layerFolder] = fsdStructure[layerFolder];
    }
    return config;
}



async function $b3f5ac6e3c89f5bf$export$ef77cc20514abcb4() {
    const prompt = await (0, $61d5eb6dc78196e8$export$70efa17eab43b3a4)();
    const { shouldGenerate: shouldGenerate } = await prompt([
        {
            name: "shouldGenerate",
            message: "Generate default config:",
            type: "confirm"
        }
    ]);
    return shouldGenerate;
}


async function $667735cbf9322ecc$export$6e68d2619adc8c3d() {
    const { fsdStructure: defaultFsdStructure } = (0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).defaultConfig;
    const isDefault = await (0, $b3f5ac6e3c89f5bf$export$ef77cc20514abcb4)();
    if (isDefault) return (0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).defaultConfig;
    const methodology = await (0, $b8b1b19034fcb4c3$export$c9523dd6ef6726d1)();
    if (methodology === (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).simple) return {
        methodology: methodology
    };
    const fsdStructure = await (0, $c620b3fb639bc0bc$export$4d83a5d5471b25f)(defaultFsdStructure);
    return {
        methodology: (0, $cacf04c761edf4f4$export$1c47a6dffe5d0c40).fsd,
        fsdStructure: fsdStructure
    };
}




class $2366ff14e62db131$var$DialogService {
    async askAboutConfiguration() {
        return await (0, $667735cbf9322ecc$export$6e68d2619adc8c3d)();
    }
}
const $2366ff14e62db131$export$48da4a26900fd479 = new $2366ff14e62db131$var$DialogService();








const $e0efe6826db6d1b5$export$e308e5c2e716c36 = (path, fileName)=>{
    const content = `export * from './${fileName}'\n`;
    try {
        (0, $3rgoX$fs.appendFileSync)((0, $3rgoX$path.join)(path, (0, $455c7b2d426f04af$export$e3852490c78bdb2d)), content);
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushSuccessLog(`File updated: ${(0, $3rgoX$path.join)(path, (0, $455c7b2d426f04af$export$e3852490c78bdb2d)).match(/src.*/)[0]}.`);
    } catch (error) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushErrorLog(error);
    }
};




const $f6ca150a4dad6896$export$49e124f35f076794 = (directory, componentName)=>`${(0, $455c7b2d426f04af$export$80729fed35a16515).src}/${directory}/${componentName}`;


const $240f53c231bb7cd8$export$69c8576abd8a609b = (componentName)=>`export * from './${componentName}'
`;




const $f73418bdd6a6779b$export$60ff446ed5603b6 = (name)=>`export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return <div>${name}</div>
}
`;


const $2782f3aa88f88bf8$export$9ed1030ede14bace = `export * from './components'
export * from './hooks'
`;


const $650dfc6622a4cc29$export$68ad50e44bcd3e5e = (name)=>`export const ${name} = () => {

}
`;


const $0e77be9beef982e4$export$d3d35020fa5b54f0 = (name)=>`export const ${name} = () => {
  return <div>${name}</div>
}

`;


const $9a1423eda6ed422b$export$7010ad74df8bac21 = `import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({})

export type RootReducerState = ReturnType<typeof rootReducer>

`;


const $ddeeb7bd374473fd$export$476202b7991aa074 = `import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/root-reducer'

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
  ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

`;





const $20ad9d4e5ae5f07d$export$8a2595c8e9069799 = (name)=>(0, $f73418bdd6a6779b$export$60ff446ed5603b6)((0, $6351d43dc6947058$export$8e831c751a9f504f)((0, $b0647299f7af8442$export$86f54f62aa7a7514)(name)));




const $ac65ea83296fa940$export$b4df0d691fa6f1b = (name)=>(0, $0e77be9beef982e4$export$d3d35020fa5b54f0)((0, $6351d43dc6947058$export$8e831c751a9f504f)((0, $b0647299f7af8442$export$86f54f62aa7a7514)(name)));



const $ec41a5f627024afe$export$4d301c611a443389 = (hookName)=>(0, $650dfc6622a4cc29$export$68ad50e44bcd3e5e)(hookName);









const $917dc26f7c807559$export$982c3a0b9a5cde94 = (directory, fileName, content = "")=>{
    try {
        const path = (0, $3rgoX$path.join)(directory, fileName);
        (0, $3rgoX$fs.writeFileSync)(path, content);
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushSuccessLog(`File created: ${path.match(/src.*/)[0]}.`);
    } catch (error) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushErrorLog(error);
    }
};


const $e98931dc46a5d5a6$export$9b53246c85cf699d = (directory, componentName)=>{
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)(directory, `${componentName}.tsx`, (0, $20ad9d4e5ae5f07d$export$8a2595c8e9069799)(componentName));
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)(directory, (0, $455c7b2d426f04af$export$e3852490c78bdb2d), (0, $240f53c231bb7cd8$export$69c8576abd8a609b)(componentName));
};






const $f8bba3b13012b14a$export$cfa0c353f47e03fc = (directory, fileName, content = "")=>{
    try {
        (0, $3rgoX$fs.readFileSync)((0, $3rgoX$path.join)(directory, fileName));
    } catch (error) {
        (0, $917dc26f7c807559$export$982c3a0b9a5cde94)(directory, fileName, content);
    }
};




const $7f0a7c116eef4806$export$a83b8f7ac59ce916 = (path)=>{
    try {
        (0, $3rgoX$fs.accessSync)(path);
        return true;
    } catch (error) {
        return false;
    }
};



const $cbdf2c43527e3b9b$export$5d7e08f51deab78c = (root, fileName)=>{
    try {
        return (0, $3rgoX$fs.readdirSync)(root).includes(fileName);
    } catch (error) {
        return false;
    }
};






const $e708d36e5258193c$export$2744709580e863e5 = (root, dir)=>{
    try {
        const path = (0, $3rgoX$path.join)(root, dir);
        if (!(0, $7f0a7c116eef4806$export$a83b8f7ac59ce916)(path)) {
            (0, $3rgoX$fs.mkdirSync)(path);
            (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushSuccessLog(`Folder created: ${path.match(/src.*/)[0]}.`);
        }
    } catch (error) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushErrorLog(error);
    }
};



const $4f21829ee384fa70$export$75426ec8836e4c8 = (path)=>{
    try {
        (0, $3rgoX$fs.rmSync)(path, {
            recursive: true,
            force: true
        });
    } catch (error) {}
};








const $4a2be066217fd1fa$var$MISSING_ARGUMENT = "Missing argument";
const $4a2be066217fd1fa$var$MISSING_NAME = (layerName)=>`${$4a2be066217fd1fa$var$MISSING_ARGUMENT}: "${layerName}-name"!`;
const $4a2be066217fd1fa$var$MISSING_COMPONENT_NAME = `${$4a2be066217fd1fa$var$MISSING_ARGUMENT}: "component-name"!`;
const $4a2be066217fd1fa$var$MISSING_ARGUMENTS = (layerName)=>`${$4a2be066217fd1fa$var$MISSING_ARGUMENT}s: "${layerName}-name" "component-name"!`;
const $4a2be066217fd1fa$var$missingErrorByCount = (argumentCount, layerName)=>argumentCount === 1 ? $4a2be066217fd1fa$var$MISSING_COMPONENT_NAME : $4a2be066217fd1fa$var$MISSING_ARGUMENTS(layerName);
const $4a2be066217fd1fa$var$ErrorHandler = {
    entity: ()=>$4a2be066217fd1fa$var$MISSING_NAME("entity"),
    entityUI: (argumentCount)=>$4a2be066217fd1fa$var$missingErrorByCount(argumentCount, "entity"),
    feature: ()=>$4a2be066217fd1fa$var$MISSING_NAME("feature"),
    featureUI: (argumentCount)=>$4a2be066217fd1fa$var$missingErrorByCount(argumentCount, "feature"),
    page: ()=>$4a2be066217fd1fa$var$MISSING_NAME("page"),
    widget: ()=>$4a2be066217fd1fa$var$MISSING_NAME("widget"),
    sharedUI: ()=>$4a2be066217fd1fa$var$MISSING_COMPONENT_NAME,
    component: ()=>$4a2be066217fd1fa$var$MISSING_NAME("component"),
    hook: ()=>$4a2be066217fd1fa$var$MISSING_NAME("hook")
};
const $4a2be066217fd1fa$export$1f196504f8ef913f = {
    e: $4a2be066217fd1fa$var$ErrorHandler.entity,
    eu: $4a2be066217fd1fa$var$ErrorHandler.entityUI,
    entity: $4a2be066217fd1fa$var$ErrorHandler.entity,
    "entity-ui": $4a2be066217fd1fa$var$ErrorHandler.entityUI,
    f: $4a2be066217fd1fa$var$ErrorHandler.feature,
    fu: $4a2be066217fd1fa$var$ErrorHandler.featureUI,
    feature: $4a2be066217fd1fa$var$ErrorHandler.feature,
    "feature-ui": $4a2be066217fd1fa$var$ErrorHandler.featureUI,
    w: $4a2be066217fd1fa$var$ErrorHandler.widget,
    widget: $4a2be066217fd1fa$var$ErrorHandler.widget,
    su: $4a2be066217fd1fa$var$ErrorHandler.sharedUI,
    "shared-ui": $4a2be066217fd1fa$var$ErrorHandler.sharedUI,
    p: $4a2be066217fd1fa$var$ErrorHandler.page,
    page: $4a2be066217fd1fa$var$ErrorHandler.page,
    c: $4a2be066217fd1fa$var$ErrorHandler.component,
    component: $4a2be066217fd1fa$var$ErrorHandler.component,
    h: $4a2be066217fd1fa$var$ErrorHandler.hook,
    hook: $4a2be066217fd1fa$var$ErrorHandler.hook
};


const $a46f10418df2a070$export$eb92e647ac6440aa = (message)=>{
    const command = (0, $7c3a3c66cfef1e62$export$939799c7582f469e).inputCommand;
    const missingCommandsCount = +message.match(/\d/)[0];
    (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushErrorLog((0, $4a2be066217fd1fa$export$1f196504f8ef913f)[command](missingCommandsCount));
    throw new Error();
};





var $b0e3d300eb25757c$export$f817523eebf7ee7f;
(function($b0e3d300eb25757c$export$f817523eebf7ee7f) {
    $b0e3d300eb25757c$export$f817523eebf7ee7f["full"] = "<name> <componentName>";
    $b0e3d300eb25757c$export$f817523eebf7ee7f["name"] = "<name>";
})($b0e3d300eb25757c$export$f817523eebf7ee7f || ($b0e3d300eb25757c$export$f817523eebf7ee7f = {}));
var $b0e3d300eb25757c$export$f86850aed1bdaa95;
(function($b0e3d300eb25757c$export$f86850aed1bdaa95) {
    $b0e3d300eb25757c$export$f86850aed1bdaa95["component"] = "c";
    $b0e3d300eb25757c$export$f86850aed1bdaa95["page"] = "p";
    $b0e3d300eb25757c$export$f86850aed1bdaa95["hook"] = "h";
})($b0e3d300eb25757c$export$f86850aed1bdaa95 || ($b0e3d300eb25757c$export$f86850aed1bdaa95 = {}));
var $b0e3d300eb25757c$export$e0ec79d174bb97a5;
(function($b0e3d300eb25757c$export$e0ec79d174bb97a5) {
    $b0e3d300eb25757c$export$e0ec79d174bb97a5["component"] = "component";
    $b0e3d300eb25757c$export$e0ec79d174bb97a5["page"] = "page";
    $b0e3d300eb25757c$export$e0ec79d174bb97a5["hook"] = "hook";
})($b0e3d300eb25757c$export$e0ec79d174bb97a5 || ($b0e3d300eb25757c$export$e0ec79d174bb97a5 = {}));
var $b0e3d300eb25757c$export$d320ba0af1ae8810;
(function($b0e3d300eb25757c$export$d320ba0af1ae8810) {
    $b0e3d300eb25757c$export$d320ba0af1ae8810["init"] = "init";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["entity"] = "e";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["feature"] = "f";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["page"] = "p";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["widget"] = "w";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["entityUI"] = "eu";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["featureUI"] = "fu";
    $b0e3d300eb25757c$export$d320ba0af1ae8810["sharedUI"] = "su";
})($b0e3d300eb25757c$export$d320ba0af1ae8810 || ($b0e3d300eb25757c$export$d320ba0af1ae8810 = {}));
var $b0e3d300eb25757c$export$92c7d88c8a7c61d6;
(function($b0e3d300eb25757c$export$92c7d88c8a7c61d6) {
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["entity"] = "entity";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["feature"] = "feature";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["page"] = "page";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["widget"] = "widget";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["entityUI"] = "entity-ui";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["featureUI"] = "feature-ui";
    $b0e3d300eb25757c$export$92c7d88c8a7c61d6["sharedUI"] = "shared-ui";
})($b0e3d300eb25757c$export$92c7d88c8a7c61d6 || ($b0e3d300eb25757c$export$92c7d88c8a7c61d6 = {}));
const $b0e3d300eb25757c$export$42166bd3b469f082 = [
    ...Object.values($b0e3d300eb25757c$export$f86850aed1bdaa95),
    ...Object.values($b0e3d300eb25757c$export$e0ec79d174bb97a5)
];
const $b0e3d300eb25757c$export$d4d35bedb49ffa6b = [
    ...Object.values($b0e3d300eb25757c$export$d320ba0af1ae8810),
    ...Object.values($b0e3d300eb25757c$export$92c7d88c8a7c61d6)
];
const $b0e3d300eb25757c$export$cbd27c6855d6c290 = [
    ...Object.values($b0e3d300eb25757c$export$d4d35bedb49ffa6b),
    ...Object.values($b0e3d300eb25757c$export$42166bd3b469f082),
    "config"
];










const $37de5012fbd580cf$export$92930d9833fe8aed = (layer)=>(0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515)[layer]);




const $7a94b4e5cd96c84e$export$b0cf34032d59541f = (layer, name)=>{
    const layerFolderPath = (0, $37de5012fbd580cf$export$92930d9833fe8aed)(layer);
    return name ? (0, $3rgoX$path.join)(layerFolderPath, name) : layerFolderPath;
};





const $c9ff6a9470214725$export$f820c483697f399b = (path)=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)(path, (0, $455c7b2d426f04af$export$80729fed35a16515).lib);
    const layerLibPath = (0, $3rgoX$path.join)(path, (0, $455c7b2d426f04af$export$80729fed35a16515).lib);
    (0, $e708d36e5258193c$export$2744709580e863e5)(layerLibPath, (0, $455c7b2d426f04af$export$80729fed35a16515).hooks);
    (0, $e708d36e5258193c$export$2744709580e863e5)(layerLibPath, (0, $455c7b2d426f04af$export$80729fed35a16515).helpers);
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)((0, $3rgoX$path.join)(layerLibPath, (0, $455c7b2d426f04af$export$80729fed35a16515).hooks), (0, $455c7b2d426f04af$export$e3852490c78bdb2d));
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)((0, $3rgoX$path.join)(layerLibPath, (0, $455c7b2d426f04af$export$80729fed35a16515).helpers), (0, $455c7b2d426f04af$export$e3852490c78bdb2d));
};





const $72495a8b60fa42f2$export$d7ed1f2d38c9761e = (path)=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)(path, (0, $455c7b2d426f04af$export$80729fed35a16515).ui);
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)((0, $3rgoX$path.join)(path, (0, $455c7b2d426f04af$export$80729fed35a16515).ui), (0, $455c7b2d426f04af$export$e3852490c78bdb2d));
};




const $1132c17c06187f09$export$9f904ef91d53ab1c = (layer, sliceName, componentName)=>{
    const layerPath = (0, $7a94b4e5cd96c84e$export$b0cf34032d59541f)(layer, sliceName);
    if (!(0, $7f0a7c116eef4806$export$a83b8f7ac59ce916)(layerPath)) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushNotExistLog(sliceName, layer);
        return;
    }
    const sliceUiPath = (0, $3rgoX$path.join)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).ui);
    if ((0, $7f0a7c116eef4806$export$a83b8f7ac59ce916)((0, $3rgoX$path.join)(sliceUiPath, componentName))) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushAlreadyExistLog(componentName, `component of ${sliceName} ${layer}`);
        return;
    }
    (0, $e708d36e5258193c$export$2744709580e863e5)(sliceUiPath, componentName);
    (0, $e98931dc46a5d5a6$export$9b53246c85cf699d)((0, $3rgoX$path.join)(sliceUiPath, componentName), componentName);
    (0, $e0efe6826db6d1b5$export$e308e5c2e716c36)(sliceUiPath, componentName);
};


const $c96ed1d102032c4b$export$baba1586a46e41a2 = (entityName, componentName)=>{
    (0, $1132c17c06187f09$export$9f904ef91d53ab1c)((0, $455c7b2d426f04af$export$80729fed35a16515).entities, entityName, componentName);
};








const $9eed6532266bd7b7$export$782ae7a3f7f1c0a6 = (layer, sliceName)=>{
    const layerFolderPath = (0, $37de5012fbd580cf$export$92930d9833fe8aed)(layer);
    const layerPath = (0, $7a94b4e5cd96c84e$export$b0cf34032d59541f)(layer, sliceName);
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515)[layer]);
    if ((0, $7f0a7c116eef4806$export$a83b8f7ac59ce916)(layerPath)) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushAlreadyExistLog(sliceName, layer);
        return false;
    }
    (0, $e708d36e5258193c$export$2744709580e863e5)(layerFolderPath, sliceName);
    const { withApi: withApi, withAssets: withAssets, withConfig: withConfig, withTypes: withTypes, withUi: withUi, withLib: withLib, withModel: withModel } = (0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).getSliceConfig(layer);
    if (withUi) (0, $72495a8b60fa42f2$export$d7ed1f2d38c9761e)(layerPath);
    if (withLib) (0, $c9ff6a9470214725$export$f820c483697f399b)(layerPath);
    if (withApi) (0, $e708d36e5258193c$export$2744709580e863e5)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).api);
    if (withModel) (0, $e708d36e5258193c$export$2744709580e863e5)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).model);
    if (withAssets) (0, $e708d36e5258193c$export$2744709580e863e5)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).assets);
    if (withConfig) (0, $e708d36e5258193c$export$2744709580e863e5)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).config);
    if (withTypes) (0, $e708d36e5258193c$export$2744709580e863e5)(layerPath, (0, $455c7b2d426f04af$export$80729fed35a16515).types);
    return true;
};


const $348e8ab3ae2d7553$export$733a36274eee84d5 = (name)=>{
    (0, $9eed6532266bd7b7$export$782ae7a3f7f1c0a6)((0, $455c7b2d426f04af$export$80729fed35a16515).entities, name);
};






const $fe3c2bf18f50d761$export$4e6096eb9e6fb74f = (featureName, componentName)=>{
    (0, $1132c17c06187f09$export$9f904ef91d53ab1c)((0, $455c7b2d426f04af$export$80729fed35a16515).features, featureName, componentName);
};




const $a464ec52be3a80cb$export$43663687821fdfec = (name)=>{
    (0, $9eed6532266bd7b7$export$782ae7a3f7f1c0a6)((0, $455c7b2d426f04af$export$80729fed35a16515).features, name);
};









const $60d2dae1f41e414a$var$mkAppFolder = ()=>{
    const { withProviders: withProviders } = (0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).getAppConfig();
    const appFolderPath = (0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).app);
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).app);
    if (withProviders) (0, $e708d36e5258193c$export$2744709580e863e5)(appFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).providers);
    const path = (0, $3rgoX$path.join)(appFolderPath, `${(0, $455c7b2d426f04af$export$80729fed35a16515).app}.tsx`);
    try {
        (0, $3rgoX$fs.readFileSync)(path);
    } catch (error) {
        (0, $e98931dc46a5d5a6$export$9b53246c85cf699d)(appFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).app);
    }
};
const $60d2dae1f41e414a$var$mkSharedFolder = ()=>{
    const sharedFolderPath = (0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).shared);
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).shared);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).ui);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).assets);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).lib);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).api);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).config);
    (0, $e708d36e5258193c$export$2744709580e863e5)(sharedFolderPath, (0, $455c7b2d426f04af$export$80729fed35a16515).types);
};
const $60d2dae1f41e414a$var$mkPagesFolder = ()=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).pages);
    (0, $f8bba3b13012b14a$export$cfa0c353f47e03fc)((0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).pages), (0, $455c7b2d426f04af$export$e3852490c78bdb2d));
};
const $60d2dae1f41e414a$export$6786e5eec56ec4be = ()=>{
    $60d2dae1f41e414a$var$mkAppFolder();
    $60d2dae1f41e414a$var$mkSharedFolder();
    $60d2dae1f41e414a$var$mkPagesFolder();
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).widgets);
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).features);
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).entities);
};







const $534c2246029ac9b6$export$c8f7d037d54d1cea = (name)=>{
    const pageFolderPath = (0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).pages);
    const pagePath = (0, $3rgoX$path.join)(pageFolderPath, name);
    const pageUiPath = (0, $3rgoX$path.join)(pagePath, (0, $455c7b2d426f04af$export$80729fed35a16515).ui);
    const result = (0, $9eed6532266bd7b7$export$782ae7a3f7f1c0a6)((0, $455c7b2d426f04af$export$80729fed35a16515).pages, name);
    if (!result) return;
    (0, $e98931dc46a5d5a6$export$9b53246c85cf699d)(pageUiPath, name);
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)(pagePath, (0, $455c7b2d426f04af$export$e3852490c78bdb2d), (0, $240f53c231bb7cd8$export$69c8576abd8a609b)((0, $455c7b2d426f04af$export$80729fed35a16515).ui));
    (0, $e0efe6826db6d1b5$export$e308e5c2e716c36)(pageFolderPath, name);
};






const $2a6c31e6f5355677$export$40e48308636fff38 = (name)=>{
    const widgetFolderPath = (0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).widgets);
    const widgetPath = (0, $3rgoX$path.join)(widgetFolderPath, name);
    const widgetUiPath = (0, $3rgoX$path.join)(widgetPath, (0, $455c7b2d426f04af$export$80729fed35a16515).ui);
    const result = (0, $9eed6532266bd7b7$export$782ae7a3f7f1c0a6)((0, $455c7b2d426f04af$export$80729fed35a16515).widgets, name);
    if (!result) return;
    (0, $e98931dc46a5d5a6$export$9b53246c85cf699d)(widgetUiPath, name);
    (0, $e0efe6826db6d1b5$export$e308e5c2e716c36)(widgetFolderPath, name);
};




const $8fc0f7b271deba09$export$86f0c6efa3d772f9 = (componentName)=>{
    (0, $1132c17c06187f09$export$9f904ef91d53ab1c)((0, $455c7b2d426f04af$export$80729fed35a16515).shared, "", componentName);
};



const $a522031447ef9a3e$var$addEntityConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).entity,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).entity,
    describe: "add new entity",
    handler: (0, $348e8ab3ae2d7553$export$733a36274eee84d5)
};
const $a522031447ef9a3e$var$addEntityUIConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).entityUI,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).full,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).entityUI,
    describe: "add new component for entity",
    handler: (0, $c96ed1d102032c4b$export$baba1586a46e41a2)
};
const $a522031447ef9a3e$var$addFeatureConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).feature,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).feature,
    describe: "add new feature",
    handler: (0, $a464ec52be3a80cb$export$43663687821fdfec)
};
const $a522031447ef9a3e$var$addFeatureUIConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).featureUI,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).full,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).featureUI,
    describe: "add new component for entity",
    handler: (0, $fe3c2bf18f50d761$export$4e6096eb9e6fb74f)
};
const $a522031447ef9a3e$var$addPageConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).page,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).page,
    describe: "add new entity",
    handler: (0, $534c2246029ac9b6$export$c8f7d037d54d1cea)
};
const $a522031447ef9a3e$var$addWidgetConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).widget,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).widget,
    describe: "add new widget",
    handler: (0, $2a6c31e6f5355677$export$40e48308636fff38)
};
const $a522031447ef9a3e$var$addSharedUIConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).sharedUI,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$92c7d88c8a7c61d6).sharedUI,
    describe: "add new shared component",
    handler: (0, $8fc0f7b271deba09$export$86f0c6efa3d772f9)
};
const $a522031447ef9a3e$var$initConfig = {
    command: (0, $b0e3d300eb25757c$export$d320ba0af1ae8810).init,
    describe: "Generate initial structure of project.",
    handler: (0, $60d2dae1f41e414a$export$6786e5eec56ec4be)
};
const $a522031447ef9a3e$export$2ccc4f72dd956183 = [
    $a522031447ef9a3e$var$addEntityConfig,
    $a522031447ef9a3e$var$addEntityUIConfig,
    $a522031447ef9a3e$var$addFeatureConfig,
    $a522031447ef9a3e$var$addFeatureUIConfig,
    $a522031447ef9a3e$var$addPageConfig,
    $a522031447ef9a3e$var$addWidgetConfig,
    $a522031447ef9a3e$var$addSharedUIConfig,
    $a522031447ef9a3e$var$initConfig
];


function $077b8aed39cb6616$var$addCommand({ command: command, parameter: parameter, alias: alias, describe: describe, handler: handler }) {
    (0, $7c3a3c66cfef1e62$export$939799c7582f469e).yargs.command({
        command: parameter ? `${command} ${parameter}` : command,
        aliases: alias,
        describe: describe,
        handler: ({ name: name, componentName: componentName })=>{
            handler(name, componentName);
        }
    });
    return $077b8aed39cb6616$var$addCommand;
}
function $077b8aed39cb6616$export$a8f90ca4ddb3e057() {
    (0, $a522031447ef9a3e$export$2ccc4f72dd956183).forEach($077b8aed39cb6616$var$addCommand);
}










const $075fe4a37ee4cb54$export$5495b26314c5474 = (componentName, path)=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).components);
    const directoryPath = (0, $f6ca150a4dad6896$export$49e124f35f076794)((0, $455c7b2d426f04af$export$80729fed35a16515).components, componentName);
    if ((0, $7f0a7c116eef4806$export$a83b8f7ac59ce916)(path ?? directoryPath)) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushAlreadyExistLog(componentName, "component");
        return;
    }
    try {
        (0, $3rgoX$fs.mkdirSync)(path ?? directoryPath);
        (0, $e98931dc46a5d5a6$export$9b53246c85cf699d)(path ?? directoryPath, componentName);
    } catch (error) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushErrorLog(error);
    }
};







const $473cf655e3452524$export$7de09f29778da12c = (pageName)=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).pages);
    if ((0, $cbdf2c43527e3b9b$export$5d7e08f51deab78c)((0, $455c7b2d426f04af$export$a12cb77cbb76ad4e), `${pageName}.tsx`)) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushAlreadyExistLog(pageName, "page");
        return;
    }
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)((0, $455c7b2d426f04af$export$a12cb77cbb76ad4e), `${pageName}.tsx`, (0, $ac65ea83296fa940$export$b4df0d691fa6f1b)(pageName));
    const files = (0, $3rgoX$fs.readdirSync)((0, $455c7b2d426f04af$export$a12cb77cbb76ad4e));
    if (files.includes((0, $455c7b2d426f04af$export$e3852490c78bdb2d))) (0, $e0efe6826db6d1b5$export$e308e5c2e716c36)((0, $455c7b2d426f04af$export$a12cb77cbb76ad4e), pageName);
    else (0, $917dc26f7c807559$export$982c3a0b9a5cde94)((0, $455c7b2d426f04af$export$a12cb77cbb76ad4e), (0, $455c7b2d426f04af$export$e3852490c78bdb2d), `export * from './${pageName}'\n`);
};








const $3ac37786a22ded29$export$dc63174b809a3177 = (hookName, path)=>{
    (0, $e708d36e5258193c$export$2744709580e863e5)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).hooks);
    const directoryPath = (0, $3rgoX$path.join)((0, $455c7b2d426f04af$export$80729fed35a16515).src, (0, $455c7b2d426f04af$export$80729fed35a16515).hooks);
    if ((0, $cbdf2c43527e3b9b$export$5d7e08f51deab78c)(directoryPath, `${hookName}.ts`)) {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushAlreadyExistLog(hookName, "hook");
        return;
    }
    const content = (0, $ec41a5f627024afe$export$4d301c611a443389)((0, $b0647299f7af8442$export$86f54f62aa7a7514)(hookName));
    (0, $917dc26f7c807559$export$982c3a0b9a5cde94)(path ?? directoryPath, `${hookName}.ts`, content);
    (0, $e0efe6826db6d1b5$export$e308e5c2e716c36)(path ?? directoryPath, hookName);
};





const $62a1a02c31c6037b$var$generateComponentConfig = {
    command: (0, $b0e3d300eb25757c$export$f86850aed1bdaa95).component,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$e0ec79d174bb97a5).component,
    describe: "add new component",
    handler: (0, $075fe4a37ee4cb54$export$5495b26314c5474)
};
const $62a1a02c31c6037b$var$generatePageConfig = {
    command: (0, $b0e3d300eb25757c$export$f86850aed1bdaa95).page,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$e0ec79d174bb97a5).page,
    describe: "add new page",
    handler: (0, $473cf655e3452524$export$7de09f29778da12c)
};
const $62a1a02c31c6037b$var$generateHookConfig = {
    command: (0, $b0e3d300eb25757c$export$f86850aed1bdaa95).hook,
    parameter: (0, $b0e3d300eb25757c$export$f817523eebf7ee7f).name,
    alias: (0, $b0e3d300eb25757c$export$e0ec79d174bb97a5).hook,
    describe: "add new hook",
    handler: (0, $3ac37786a22ded29$export$dc63174b809a3177)
};
const $62a1a02c31c6037b$export$2ccc4f72dd956183 = [
    $62a1a02c31c6037b$var$generateComponentConfig,
    $62a1a02c31c6037b$var$generatePageConfig,
    $62a1a02c31c6037b$var$generateHookConfig
];


function $e81c8b18e35023d5$var$addCommand({ command: command, parameter: parameter, alias: alias, describe: describe, handler: handler }) {
    (0, $7c3a3c66cfef1e62$export$939799c7582f469e).yargs.command({
        command: parameter ? `${command} ${parameter}` : command,
        aliases: alias,
        describe: describe,
        handler: ({ name: name, componentName: componentName })=>{
            handler(name, componentName);
        }
    });
    return $e81c8b18e35023d5$var$addCommand;
}
function $e81c8b18e35023d5$export$319fefc438b900c0() {
    (0, $62a1a02c31c6037b$export$2ccc4f72dd956183).forEach($e81c8b18e35023d5$var$addCommand);
}


// import { generateStore } from './utils/redux-generators'
function $60e658accffef5b2$var$start() {
    const methodology = {
        fsd: (0, $077b8aed39cb6616$export$a8f90ca4ddb3e057),
        simple: (0, $e81c8b18e35023d5$export$319fefc438b900c0)
    };
    if (process.argv[2] === "--help") {
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).writeHelp((0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).methodology);
        return;
    }
    (0, $7c3a3c66cfef1e62$export$939799c7582f469e).yargs.wrap(100).help("extended-help").showHelpOnFail(false).scriptName("reacling").usage("Usage: $0 <command>").middleware((props)=>{
        const inputCommand = props._[0];
        if (inputCommand && !(0, $b0e3d300eb25757c$export$cbd27c6855d6c290).includes(inputCommand)) {
            (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushUnknownCommandLog(inputCommand);
            throw new Error();
        }
        if (inputCommand === "config") return;
        if (!inputCommand.length) return;
        (0, $e708d36e5258193c$export$2744709580e863e5)(".", (0, $455c7b2d426f04af$export$80729fed35a16515).src);
    }).fail((0, $a46f10418df2a070$export$eb92e647ac6440aa)).command({
        command: "config",
        describe: "Use to generate config.json",
        handler: async ()=>{
            console.log((0, ($parcel$interopDefault($3rgoX$chalk))).blueBright((0, ($parcel$interopDefault($3rgoX$boxen)))("Generating config file...", {
                title: "Reacling",
                padding: $455c7b2d426f04af$export$6f98e8eaf0be1996
            })));
            (0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).overwriteUserConfig(await (0, $2366ff14e62db131$export$48da4a26900fd479).askAboutConfiguration());
            (0, $71fc308ccb57d50f$export$af88d00dbe7f521).pushSuccessLog("Config file has been generated!");
        }
    });
    methodology[(0, $67e5b0ba4c8bb956$export$f60151a8e92c6a2d).methodology]();
    (0, $7c3a3c66cfef1e62$export$939799c7582f469e).yargs.parseAsync().then(()=>{
        (0, $71fc308ccb57d50f$export$af88d00dbe7f521).writeLogs();
    }).catch(()=>{});
}
try {
    $60e658accffef5b2$var$start();
} catch (error) {
    (0, $71fc308ccb57d50f$export$af88d00dbe7f521).writeLogs();
}


//# sourceMappingURL=main.js.map
