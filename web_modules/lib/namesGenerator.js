const expand_names = (namespace, name) => {
    const result = {}
    result[`${name}`] = `${namespace}/${name}`
    result[`${name}_OK`] = `${namespace}/${name}/ok`
    result[`${name}_FAIL`] = `${namespace}/${name}/fail`
    return result;
}

export default function namesGenerator ({namespace, actions}) {
    let result = {}
    for (const name of actions) {
        result = { ...result, ...expand_names(namespace, name)  }
    }
    return result;
}
