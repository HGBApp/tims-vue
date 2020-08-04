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
              label-width="160px"
              size="mini"
              :label-position="labelPosition"
            >
              <el-row>
                <el-col :span="9">
                  <el-form-item label="创意编号">
                    <el-col :span="23">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>

                  <el-form-item label="创意提出机构">
                    <el-col :span="23">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>

                  <el-form-item label="创意提出时间起止范围">
                    <el-col :span="23">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="一级业务标签">
                    <el-col :span="23">
                      <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="我提出的意见">
                    <el-checkbox label name="type"></el-checkbox>
                  </el-form-item>
                </el-col>

                <el-col :span="9" :offset="6">
                  <el-form-item label="创意名称">
                    <el-col :span="23">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="创意状态">
                    <el-col :span="23">
                      <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="创意类型">
                    <el-col :span="23">
                      <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="二级业务标签">
                    <el-col :span="23">
                      <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
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
      <el-button size="mini" type="primary" @click="add">新增</el-button>
      <el-button size="mini" type="primary" @click="edit">编辑</el-button>
      <el-button size="mini">关闭</el-button>
      <el-divider direction="vertical"></el-divider>
      <el-button size="mini" type="primary">导出</el-button>
    </div>
    <!--表格-->
    <div class="elTable">
      <el-table ref="multipleTable" :data="tableData" max-height="600" border style="width: 100%">
        <el-table-column type="selection" width="80"></el-table-column>
        <el-table-column label="创意编号" width="150">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="创意名称" width="150"></el-table-column>
        <el-table-column prop="address" label="一级业务标签" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="二级业务标签" width="150"></el-table-column>
        <el-table-column prop="name" label="创意类型" width="150"></el-table-column>
        <el-table-column prop="name" label="创意提出机构" width="150"></el-table-column>
        <el-table-column prop="name" label="创意提出人" width="150"></el-table-column>
        <el-table-column prop="name" label="创意状态"></el-table-column>
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
    <v-add-demand-creativity v-if="showTaskDialog"></v-add-demand-creativity>

    <!--编辑-->
    <v-edit-demand-creativity v-if="showEditTaskDialog"></v-edit-demand-creativity>
  </div>
</template>

<script>
import VAddDemandCreativity from "./addDemandCreativity";
import VEditDemandCreativity from "./editDemandCreativity";

export default {
  components: {
    VAddDemandCreativity,
    VEditDemandCreativity,
  },
  data() {
    return {
      labelPosition: "right",
      showTaskDialog: false,
      currentPage4: 4,
      showEditTaskDialog: false,

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
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
      multipleSelection: [],
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
      this.showEditTaskDialog = true;
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
