<template>
  <div class="main">
    <!--查询-->
    <div class="query">
      <el-collapse>
        <el-collapse-item class="elItem">
          <template slot="title">
            <i class="header-icon el-icon-search"></i>查询条件
          </template>
          <div class="criteria">
            <el-form
              ref="form"
              :model="form"
              label-width="120px"
              size="mini"
              :label-position="labelPosition"
            >
              <el-row>
                <el-col :span="9">
                  <el-form-item label="调研编号">
                    <el-col :span="23">
                      <el-input v-model="form.researchNo"></el-input>
                    </el-col>
                  </el-form-item>

                  <el-form-item label="一级业务标签">
                    <el-col :span="23">
                      <el-select v-model="form.classA" placeholder="请选择" style="width:100%">
                        <el-option
                          v-for="(item,index) in classAList"
                          :label="item.name"
                          :value="item.value"
                          :key="index"
                        >{{item.name}}</el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>

                  <el-form-item label="调研发起人">
                    <el-col :span="23">
                      <el-input v-model="form.researchSponsor"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="调研任务状态">
                    <el-col :span="23">
                      <el-select
                        v-model="form.researchTaskStatus"
                        placeholder="请选择"
                        style="width:100%"
                      >
                        <el-option
                          v-for="(item,index) in researchTaskStatusList"
                          :label="item.name"
                          :value="item.value"
                          :key="index"
                        >{{item.name}}</el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-col>

                <el-col :span="9" :offset="6">
                  <el-form-item label="调研主题">
                    <el-col :span="23">
                      <el-input v-model="form.researchTopics"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="二级业务标签">
                    <el-col :span="23">
                      <el-select v-model="form.classA" placeholder="请选择" style="width:100%">
                        <el-option
                          v-for="(item,index) in classBList"
                          :label="item.name"
                          :value="item.value"
                          :key="index"
                        >{{item.name}}</el-option>
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
                <el-col :span="12" :offset="10">
                  <el-button type="primary" size="mini">查询</el-button>
                  <el-button size="mini">重置</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!--按钮-->
    <div class="button-option">
      <el-button size="mini" type="primary" @click="add">
        <i class="el-icon-plus"></i>新增
      </el-button>
      <el-button size="mini" type="primary" @click="edit">
        <i class="el-icon-edit"></i>编辑
      </el-button>
      <el-button size="mini" @click="closeRow">
        <i class="el-icon-circle-close"></i>关闭
      </el-button>
      <el-divider direction="vertical"></el-divider>
      <el-button size="mini" type="primary">
        <i class="el-icon-upload2"></i>导出
      </el-button>
    </div>
    <!--表格-->
    <div class="elTable">
      <el-table
        ref="multipleTable"
        @select="select"
        :data="tableData"
        max-height="600"
        border
        style="width: 100%"
      >
        <el-table-column type="selection" width="80"></el-table-column>
        <el-table-column label="调研编号" width="150">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="调研主题" width="150"></el-table-column>
        <el-table-column prop="address" label="调研发起人" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="一级业务标签" width="150"></el-table-column>
        <el-table-column prop="name" label="二级业务标签" width="150"></el-table-column>
        <el-table-column prop="name" label="调研任务状态"></el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="elPagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <!--新增-->
    <v-add-research-task v-if="showTaskDialog"></v-add-research-task>
    <!--编辑-->
    <v-edit-research-task v-if="showEditTaskDialog"></v-edit-research-task>
  </div>
</template>

<script>
import VAddResearchTask from "./addResearchTask";
import VEditResearchTask from "./editResearchTask";
import { Message } from "element-ui";
export default {
  components: {
    VAddResearchTask,
    VEditResearchTask,
  },
  data() {
    return {
      labelPosition: "right",
      showTaskDialog: false,
      currentPage4: 4,
      showEditTaskDialog: false,
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
      researchTaskStatusList: [
        { name: "个人业务", value: "1" },
        { name: "运行管理", value: "2" },
        { name: "银行卡业务", value: "3" },
      ],
      form: {
        researchNo: "",
        classA: "",
        researchSponsor: "",
        researchTaskStatus: "",
        researchTopics: "",
        classB: "",
        sponsorOrganization: "",
      },
      selectData: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    closeAdd() {
      this.showTaskDialog = false;
    },
    closeEdit() {
      this.showEditTaskDialog = false;
    },
    handleCurrentChange() {},
    handleSizeChange() {},
    add() {
      this.showTaskDialog = true;
    },
    edit() {
      if (this.selectData.length == 1) {
        this.showEditTaskDialog = true;
      } else if (this.selectData.length > 1) {
        Message.warning("请选择单条数据");
      } else {
        Message.warning("请至少选择一条数据");
      }
    },
    closeRow() {
      if (this.selectData.length == 1) {
        this.showEditTaskDialog = true;
      } else if (this.selectData.length > 1) {
        Message.warning("请选择单条数据");
      } else {
        Message.warning("请至少选择一条数据");
      }
    },
    select(selection, row) {
      this.selectData = selection;
      console.log("selection", JSON.stringify(selection));
      console.log("row", JSON.stringify(row));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.criteria {
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0px;
}
.main {
  padding: 10px 20px;
}

.el-collapse {
  border-top: 0px;
}

/*.elItem >>> .el-collapse-item__wrap {
  border-bottom: 0px;
} */
.elItem >>> .el-collapse-item__header {
  height: 30px;
  line-height: 30px;
}
.elItem >>> .el-collapse-item__header.is-active {
  border-bottom: 1px solid #ebeef5;
}
.button-option {
  margin-top: 10px;
}
.elTable >>> .el-table td,
.elTable >>> .el-table th {
  padding: 4px 0px;
}
.elTable >>> .el-table th {
  background: #f4f4f5;
}
.elTable {
  margin-top: 10px;
}
.elPagination >>> .el-pagination {
  padding-top: 10px;
}
</style>
