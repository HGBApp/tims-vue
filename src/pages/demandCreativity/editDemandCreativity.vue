<template>
  <el-dialog
    center
    class="elDialog"
    title="编辑需求创意"
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
          <el-form-item label="创意名称" prop="researchTopics">
            <el-col :span="23">
              <el-input v-model="form.researchTopics"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="创意类型" prop="researchObj">
            <el-col :span="23">
              <el-select v-model="form.classA" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="提出时间" prop="classA">
            <el-col :span="23">
              <el-date-picker
                style="width:100%"
                v-model="form.TimeLimit"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="一级业务渠道" prop="TimeLimit">
            <el-col :span="23">
              <el-select v-model="form.classA" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="一级渠道">
            <el-col :span="23">
              <el-select v-model="form.classA" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="9" :offset="6">
          <el-form-item label="创意提出人" prop="classB">
            <el-col :span="23">
              <el-input v-model="form.classB"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="创意来源" prop="visibleRange">
            <el-col :span="23">
              <el-select v-model="form.visibleRange" placeholder="请选择" style="width:100%">
                <el-option label="全部可见对象" value="shanghai"></el-option>
                <el-option label="所选调研对象可见" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="二级业务标签" prop="researchPriorities">
            <el-col :span="23">
              <el-select v-model="form.researchPriorities" placeholder="请选择" style="width:100%">
                <el-option label="一般" value="shanghai"></el-option>
                <el-option label="重要" value="beijing"></el-option>
                <el-option label="紧急" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="二级渠道">
            <el-col :span="23">
              <el-select v-model="form.researchPriorities" placeholder="请选择" style="width:100%">
                <el-option label="一般" value="shanghai"></el-option>
                <el-option label="重要" value="beijing"></el-option>
                <el-option label="紧急" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="现状描述" prop="researchPurpose">
            <el-input type="textarea" v-model="form.researchPurpose"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="现状描述附件" prop="researchBackground">
            <el-button type="primary" size="mini" @click="open">上传</el-button>
            <el-table class="elTable" border :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="附件名称" width="180"></el-table-column>
              <el-table-column prop="name" label="附件类型" width="180"></el-table-column>
              <el-table-column prop="address" label="附件描述"></el-table-column>
              <el-table-column prop="address" label="上传人"></el-table-column>
              <el-table-column prop="address" label="操作"></el-table-column>
            </el-table>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="创意描述" prop="researchPurpose">
            <el-input type="textarea" v-model="form.researchPurpose"></el-input>
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
    <!--上传-->
    <el-dialog width="40%" title="附件信息" :visible.sync="innerVisible" append-to-body>
      <div class="box">
        <el-row>
          <el-col :span="3">文件位置:</el-col>
          <!-- <el-col :span="12">
            <el-input size="mini" v-model="form.classB"></el-input>
          </el-col>-->
          <el-col :span="12" :offset="2">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleSuccess"
              :file-list="fileList"
            >
              <el-button size="mini" type="primary">浏览</el-button>
            </el-upload>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">文件描述:</el-col>
          <el-col :span="12">
            <el-input type="textarea" v-model="form.researchPurpose"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">提示信息:</el-col>
          <el-col :span="12">文件大小不能超过40M,文件名称不能超过200字符，文件描述不能超过500字符，请了解，谢谢</el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="6">
            <el-button size="mini" type="primary" @click="save">保存</el-button>
            <el-button size="mini" @click="close_close">取消</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      fileList: [],
      innerVisible: false,
      dialogVisible: true,
      labelPosition: "right",
      tableData: [],
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
    close() {
      this.$parent.closeAdd();
    },
    open() {
      this.innerVisible = true;
    },
    save() {
      this.innerVisible = false;
    },
    close_close() {
      this.innerVisible = false;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(file, fileList) {
      console.log(file, fileList);
    },

    beforeRemove(file, fileList) {
      return MessageBox.confirm(`确定移除 ${file.name}？`);
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
.box >>> .el-row + .el-row {
  margin-top: 20px;
}
.elTable >>> .el-table td,
.el-table th {
  padding: 4px 0px;
}
.elTable {
  margin-top: 10px;
}
</style>