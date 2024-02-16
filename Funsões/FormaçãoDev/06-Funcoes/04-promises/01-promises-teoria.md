# Promessa
_A promise espera receber uma funcao como parâmetro_

### Exemplo

```
const promessa = new Promise(function (resolve){ console.log('Função da Prómise')})

promessa.then(param => console.log(param))
```
### Resultado

```
Função resolve
```

### _.then_

**Chama o resolver da promise**


## Sync ( executa o código em linha sequencialmente )

1. ->
2. ->
3. ->

## Async ( executa o código de forma não sequencail )
_Começa uma execução e sem finaliza-la inicia nova execução_

1. ------->
2. ------------->
3. --->

### Exemplo

```
const promessa = new Promise(function (resolve){
        resolve('Dentro da função de promessa')
})

promessa.then(valor => console.log(valor))
console.log('Fim)

```
### Resultado em execução

```
Fim
Dentro da função de promessa


```

