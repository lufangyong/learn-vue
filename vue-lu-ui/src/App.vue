<template>
  <div id="app">
    <div class="l-item">
      <label>Title:</label> 
      <lu-hello-world :color="color" :msg="msg"></lu-hello-world>
    </div>

    <div class="l-item">
      <label>Button:</label> 
      <lu-button class="lu-btn" @click="onClick">确定</lu-button>
      <lu-button class="lu-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</lu-button>
      <lu-button class="lu-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</lu-button>
      <lu-button class="lu-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</lu-button>
      <lu-button class="lu-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</lu-button>
    </div>
    
    <div class="l-item">
      <label>Select: </label>
      <lu-select 
        class="l-select"
        label="label"
        value="value"
        v-model="selectValue"
        :options="options">
      </lu-select>
    </div>

    <div class="lu-item">
      <label>Input: </label>
      <lu-input
      v-model="input1"
      placeholder="请输入信息">
      </lu-input>

      <lu-input
        v-model="input2"
        placeholder="请输入信息">
      </lu-input>

      <lu-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </lu-input>
    </div>

    <div class="lu-item">
      <label>Switch: </label>

      <lu-switch
      v-model="lightSwitch">开关(开):</lu-switch>

      <lu-switch
      v-model="switchLight">开关(关):</lu-switch>
    </div>
    
    <lu-button class="l-btn" @click="handlePrint">打印选项值</lu-button>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to lu UI!',
      color: 'red',
      // Select
      selectValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style lang="scss">
.lu-select, .lu-btn, .lu-switch, .lu-input {
  margin: 10px 6px;
}
.lu-item {
  display: flex;
  align-items: center;

  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
