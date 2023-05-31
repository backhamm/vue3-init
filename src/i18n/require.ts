interface DefaultObjType {
    [key: string]: any;
}
const langObj: DefaultObjType = {
    zh: require.context('./zh', true, /.ts$/),
    en: require.context('./en', true, /.ts$/),
};
const messages: DefaultObjType = {};

function requireFun(type: string): DefaultObjType {
    const modules: DefaultObjType = {};
    const files: any = langObj[type];
    files
        .keys()
        .forEach((el: string) => {
            const moduleName: string = el.replace(/^.\/(.*)\.ts/, '$1');
            modules[moduleName] = files(el).default;
        });
    return modules;
}

Object.keys(langObj).forEach((el: string) => {
    messages[el] = requireFun(el);
});

export default messages;
