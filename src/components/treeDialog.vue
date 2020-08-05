<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" @close="close" append-to-body>
    <el-tree
      ref="tree"
      show-checkbox
      @check-change="handleCheckChange"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      node-key="id"
      :check-strictly="true"
    ></el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { Message } from "element-ui";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      data: [
        {
          id: "1",
          label: "一级 1",
          children: [
            {
              id: "1-1",
              label: "二级 1-1",
              children: [
                {
                  id: "1-1-1",
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          label: "一级 2",
          children: [
            {
              id: "2-1",
              label: "二级 2-1",
              children: [
                {
                  id: "2-1-1",
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              id: "2-2",
              label: "二级 2-2",
              children: [
                {
                  id: "2-2-1",
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          id: "3",
          label: "一级 3",
          children: [
            {
              id: "3-1",
              label: "二级 3-1",
              children: [
                {
                  id: "3-1-1",
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              id: "3-2",
              label: "二级 3-2",
              children: [
                {
                  id: "3-2-1",
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      dialogVisible: true,

      selectOrg: {
        orgsid: [],
      },
    };
  },
  methods: {
    confirm() {
      this.$emit("getResearchObj", this.selectOrg.orgsid);
      this.dialogVisible = false;
    },
    close() {
      this.$emit("closeTree");
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(JSON.stringify(data), "数据");
      // console.log(checked, "选中状态");
      // console.log(indeterminate, "子树中选中状态");
      // 获取当前选择的id在数组中的索引
      const indexs = this.selectOrg.orgsid.indexOf(data.id);
      // 如果不存在数组中，并且数组中已经有一个id并且checked为true的时候，代表不能再次选择。
      if (indexs < 0 && this.selectOrg.orgsid.length === 1 && checked) {
        console.log("only one");

        // 设置已选择的节点为false 很重要
        this.$refs.tree.setChecked(this.selectOrg.orgsid[0].id, false);
        this.selectOrg.orgsid = [];
        this.selectOrg.orgsid.push({ id: data.id, label: data.label });
      } else if (this.selectOrg.orgsid.length === 0 && checked) {
        console.log("********1");
        // 发现数组为空 并且是已选择
        // 防止数组有值，首先清空，再push
        this.selectOrg.orgsid = [];
        this.selectOrg.orgsid.push({ id: data.id, label: data.label });
      }
    },
  },
};
</script>

<style>
</style>