
> ### 一个简单的验证码效果
### Installation
```
  npm install validate-coder 
  yarn add validate-coder 
```

### 在Vue中使用
```
<template>
  <div>
    <input type="text" v-model="inputValue" @blur="submit" />
    <div ref="coderContainer" @click="refresh"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { getValidateCoder } from "validate-coder";
  const coderContainer = ref<HTMLDivElement>();
  const validateCoder = ref<string>();
  const inputValue = ref<string>();

  //生成或更新验证码
  const changeCode = () => {
    validateCoder.value = getValidateCoder(
      coderContainer.value as HTMLDivElement
    );
  };

  onMounted(() => {
    changeCode();
  });

  const refresh = () => {
    changeCode();
  };

  const submit = () => {
    if (!inputValue.value) return;
    if (validateCoder.value === inputValue.value) {
      console.log("验证通过");
    } else {
      console.log("验证失败");
      changeCode();
    }
  };
</script>

```



### 在react中使用
```
import { useState, useRef, useEffect } from "react";
import { getValidateCoder } from "validate-coder";

function App() {
  const dom = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState<string>();

  //初始化验证码
  useEffect(() => {
    setCode(getValidateCoder(dom.current as HTMLDivElement));
  }, []);

  //更新验证码
  const refresh = () => {
    setCode(getValidateCoder(dom.current as HTMLDivElement));
  };

  const changeInput = (e: any) => {
    if (code !== e.target.value) {
      console.log("验证码不正确"); //校验失败
      setCode(getValidateCoder(dom.current as HTMLDivElement));
      return;
    } else {
      console.log("验证通过"); //校验成功
    }
  };
  return (
    <>
      <input type="text" onBlur={changeInput} />
      <div onClick={refresh} ref={dom}></div>
    </>
  );
}

export default App;

```