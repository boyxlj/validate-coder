
> ### 一个简单的验证码效果
### Installation
`
  npm install validate-super-code  
  yarn add validate-super-code  
`

### 在Vue中使用
```


<template>
  <div ref="container" @click="clicks"></div>
</template>

<script setup lang="ts">

  import { ref, onMounted } from "vue";
  import { getCode } from "validate-super-code";
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
