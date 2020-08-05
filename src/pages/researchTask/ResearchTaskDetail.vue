<template>
  <el-dialog
    center
    class="elDialog"
    title="调研任务祥单"
    :visible.sync="dialogVisible"
    @close="close"
    fullscreen
  >
    <table class="table">
      <tr>
        <td width="20%">调研编号</td>
        <td width="30%">11111111111</td>
        <td width="20%">调研主题</td>
        <td width="30%">3333</td>
      </tr>
      <tr>
        <td>调研背景</td>
        <td>11111111111</td>
        <td>调研目的</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>一级业务标签</td>
        <td>11111111111</td>
        <td>二级业务标签</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>调研对象</td>
        <td>11111111111</td>
        <td>调研任务可见范围</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>调研优先级</td>
        <td>11111111111</td>
        <td>反馈时限</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>调研受理人</td>
        <td>11111111111</td>
        <td>反馈要求</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>调研发起人</td>
        <td>11111111111</td>
        <td>发起人所属机构</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>联系方式</td>
        <td>11111111111</td>
        <td>创建时间</td>
        <td>3333</td>
      </tr>
      <tr>
        <td>调研任务状态</td>
        <td>11111111111</td>
        <td>关联创意列表</td>
        <td>
          <el-button type="primary" size="mini">查看关联创意列表</el-button>
        </td>
      </tr>
    </table>
    <!--tab-->
    <div class="elTabs">
      <el-tabs v-model="first" type="card" :value="first" @tab-click="handleClick">
        <el-tab-pane label="日志信息" :name="first">
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%"
          >
            <el-table-column type="index" width="80">
              <template slot="header" slot-scope="scope">
                <span>序号</span>
              </template>
            </el-table-column>
            <el-table-column property="date" label="操作人" width="120"></el-table-column>
            <el-table-column property="name" label="操作时间" width="120"></el-table-column>
            <el-table-column property="address" label="操作" width="120"></el-table-column>
            <el-table-column property="address" label="备注"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      first: "first",
      showTreeDialog: false,
      dialogVisible: true,
      labelPosition: "right",
      form: {
        researchTopics: "",
        researchObj: "",
        classA: "",
        TimeLimit: "",
        researchAcceptor: "",
        researchSponsor: "",
        contactInformation: "",
        classB: "",
        visibleRange: "",
        researchPriorities: "",
        sponsorOrganization: "",
        researchPurpose: "",
        researchBackground: "",
        feedbackRequirements: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      classAList: [
        { name: "个人业务", value: "1" },
        { name: "运行管理", value: "2" },
        { name: "银行卡业务", value: "3" },
      ],
      classBList: [
        { name: "个人业务", value: "1" },
        { name: "运行管理", value: "2" },
        { name: "银行卡业务", value: "3" },
      ],
      rules: {
        researchTopics: [
          { required: true, message: "请输入调研主题", trigger: "blur" },
        ],
        researchObj: [
          { required: true, message: "请选择调研对象", trigger: "blur" },
        ],
        classA: [
          { required: true, message: "请选择一级业务标签", trigger: "change" },
        ],
        classB: [
          { required: true, message: "请选择二级业务标签", trigger: "change" },
        ],

        TimeLimit: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],

        researchSponsor: {
          required: true,
          message: "请输入调研发起人",
          trigger: "blur",
        },
        contactInformation: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
        ],
        classB: [
          { required: true, message: "请选择二级业务标签", trigger: "blur" },
        ],

        visibleRange: {
          required: true,
          message: "请选择可见范围",
          trigger: "change",
        },
        researchPriorities: {
          required: true,
          message: "请选择调研优先级",
          trigger: "change",
        },

        researchPurpose: {
          required: true,
          message: "请输入调研目的",
          trigger: "blur",
        },
        researchBackground: {
          required: true,
          message: "请输入调研背景",
          trigger: "blur",
        },
        feedbackRequirements: {
          required: true,
          message: "请输入反馈要求",
          trigger: "blur",
        },
      },
    };
  },
  methods: {
    saveForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getResearchObj(params) {
      this.form.researchObj = params[0].label;
    },
    change() {
      this.showTreeDialog = true;
    },
    close() {
      this.$parent.closeAdd();
    },
    closeTree() {
      this.showTreeDialog = false;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
.table,
th,
td {
  border: 1px solid;
  border-color: rgba(215, 215, 215, 1);
}
td,
th {
  padding: 8px;
  height: 16px;
}
td:nth-child(2n + 1) {
  background: rgba(242, 242, 242, 1);
}
.elTabs {
  margin-top: 20px;
}
</style>