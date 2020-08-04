<template>
  <el-dialog
    center
    class="elDialog"
    title="新增需求调研任务"
    :visible.sync="dialogVisible"
    @close="close"
    fullscreen
  >
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
      size="mini"
      :label-position="labelPosition"
      :rules="rules"
    >
      <el-row>
        <el-col :span="9">
          <el-form-item label="调研主题" prop="researchTopics">
            <el-col :span="23">
              <el-input v-model="form.researchTopics"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="调研对象" prop="researchObj">
            <el-col :span="20">
              <el-input v-model="form.researchObj" disabled></el-input>
            </el-col>
            <el-col :span="1" :offset="1">
              <el-button type="primary" size="mini" @click="change">选择</el-button>
            </el-col>
          </el-form-item>
          <el-form-item label="一级业务标签" prop="classA">
            <el-col :span="23">
              <el-select v-model="form.classA" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="反馈时限" prop="TimeLimit">
            <el-col :span="23">
              <el-date-picker
                style="width:100%"
                v-model="form.TimeLimit"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="调研受理人">
            <el-col :span="23">
              <el-input v-model="form.researchAcceptor"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="调研发起人" prop="researchSponsor">
            <el-col :span="23">
              <el-input v-model="form.researchSponsor"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式" prop="contactInformation">
            <el-col :span="23">
              <el-input v-model="form.contactInformation"></el-input>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="9" :offset="6">
          <el-form-item label="二级业务标签" prop="classB">
            <el-col :span="23">
              <el-select v-model="form.classB" placeholder="请选择活动区域" style="width:100%"></el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="可见范围" prop="visibleRange">
            <el-col :span="23">
              <el-select v-model="form.visibleRange" placeholder="请选择" style="width:100%">
                <el-option label="全部可见对象" value="shanghai"></el-option>
                <el-option label="所选调研对象可见" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="调研优先级" prop="researchPriorities">
            <el-col :span="23">
              <el-select v-model="form.researchPriorities" placeholder="请选择" style="width:100%">
                <el-option label="一般" value="shanghai"></el-option>
                <el-option label="重要" value="beijing"></el-option>
                <el-option label="紧急" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="发起人所属机构">
            <el-col :span="23">
              <el-input v-model="form.sponsorOrganization"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="调研目的" prop="researchPurpose">
            <el-input type="textarea" v-model="form.researchPurpose"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="调研背景" prop="researchBackground">
            <el-input type="textarea" v-model="form.researchBackground"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="反馈要求" prop="feedbackRequirements">
            <el-input type="textarea" v-model="form.feedbackRequirements"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="10">
          <el-button type="primary" size="mini">保存</el-button>
          <el-button size="mini">提交</el-button>
          <el-button size="mini">取消</el-button>
        </el-col>
      </el-row>
    </el-form>
    <!--树弹框-->
    <v-tree-dialog v-if="showTreeDialog" @closeTree="closeTree"></v-tree-dialog>
  </el-dialog>
</template>

<script>
import VTreeDialog from "../../components/treeDialog";
export default {
  components: {
    VTreeDialog,
  },
  data() {
    return {
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
      rules: {
        researchTopics: [
          { required: true, message: "请输入调研主题", trigger: "blur" },
        ],
        researchObj: [
          { required: true, message: "请选择活动区域", trigger: "blur" },
        ],
        classA: [
          { required: true, message: "请选择一级业务标签", trigger: "change" },
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
          message: "请选择活动资源",
          trigger: "change",
        },
        contactInformation: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        classB: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
        visibleRange: {
          required: true,
          message: "请选择活动资源",
          trigger: "change",
        },
        researchPriorities: {
          required: true,
          message: "请选择活动资源",
          trigger: "change",
        },

        researchPurpose: {
          required: true,
          message: "请选择活动资源",
          trigger: "change",
        },
        researchBackground: {
          required: true,
          message: "请选择活动资源",
          trigger: "change",
        },
        feedbackRequirements: {
          required: true,
          message: "请选择活动资源",
          trigger: "change",
        },
      },
    };
  },
  methods: {
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
.elDialog {
  background: #fff;
  position: absolute;
  top: 0px;
  left: 0px;

  z-index: 99;
}
.elDialog >>> .el-dialog--center .el-dialog__body {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 30px;
}
</style>