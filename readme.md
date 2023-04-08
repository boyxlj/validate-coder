
> ### 一个简单的验证码效果
### Installation
```
  npm install validate-super-code  
    
  yarn add validate-super-code  
```

### 在Vue中使用
```
<template>
  <div ref="container" @click="clicks"></div>
</template>

<script setup lang="ts">

  import { ref, onMounted } from "vue";
  import { getCode } from "validate-coder";
  const container = ref();
  const code = ref()

  onMounted(() => {
    code.value = getCode(container.value)
  });

  const clicks = ()=>{
    //更新验证码
    code.value = getCode(container.value)
  }

</script>
```



### 在react中使用
```
import { useState, useRef, useEffect } from "react";
import { getCode } from "validate-coder";
function App() {
  const dom = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState<number>();

  //初始化验证码
  useEffect(() => {
    setCode(getCode(dom.current));
  }, []);

  //更新验证码
  const refresh = () => {
    setCode(getCode(dom.current));
  };

  const changeInput = (e: any) => {
    const val = e.target?.value * 1;
    if (code !== val) {
      console.log("验证码不正确"); //校验失败
      setCode(getCode(dom.current));
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