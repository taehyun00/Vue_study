<template>

  <input
    v-if="FieldType == ''"
    type="text"
    :value="Value"
    :placeholder="PlaceHolder"
    :class="Input"
  />


  <input
    v-else
    type="text"
    :value="RenderContent"
    :placeholder="PlaceHolder"
    :class="Input"
    @input="handleContentChange"
  />
</template>

<script>
import { ref } from "vue"

export default {
  name: "TheInput",
  props: {
    PlaceHolder: {
      type: String,
      default: "입력해주세요"
    },
    Value: {
      type: String,
      default: ""
    },
    FieldType: {
      type: String,
      default: ""   
    }
  },
  setup() {
    const Input = ref("Input")
    const Content = ref("")        
    const RenderContent = ref("")  

    const handleContentChange = (e) => {
      const typedValue = e.target.value

      RenderContent.value = "•".repeat(typedValue.length)

      
      if (e.inputType === "deleteContentBackward") {
 
        Content.value = Content.value.slice(0, -1)
      } else {

        const lastChar = typedValue[typedValue.length - 1]
        if (lastChar) {
          Content.value = Content.value + lastChar
        }
      }
    }

    return {
      Input,
      RenderContent,
      handleContentChange
    }
  }
}
</script>

<style>
.Input {
  border: none;
  border-bottom: 1px solid #BBBBBB;
  background-color: #3E3E3E;
  width: 320px;
  padding: 12px 0px;

  font-family: "JR";
  font-size: 20px;
  color: #BBBBBB;
  outline: none;
}
.Input::placeholder {
  color: #BBBBBB;
}
</style>
