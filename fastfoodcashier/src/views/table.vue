 <template>
 <div style="width:100%;height:35vh;overflow:auto">
   <el-table
      :data="tableData"
      stripe
      border
       :row-class-name="tableRowClassName"
      style="width: 100%;" >
      <el-table-column
        prop="goodsName"
        label="产品名称"
        
        width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="count"
        label="个数" width="100" align="center">
      </el-table-column>
       <el-table-column
      label="操作"
      align="center">
        <template slot-scope="scope">
        <el-button @click.prevent="handleClick(scope.row)" type="button" size="small">增加</el-button>
        <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
       </el-table-column>
    </el-table>
     <div class="zj"><span>总份数:{{total}}份</span> <span>总计:{{amount}}元</span></div>
 </div>
    
     <!--  {
            date: '2016-05-02',
            name: '王小虎',
            address: ''
          } -->
  </template>

  <script>
    import {mapState,mapMutations} from "vuex"

    export default {
      
      data() {
        return {
          
        }
      },
     computed:{
        ...mapState(["tableData","total","amount"])
      },
      methods:{
        ...mapMutations(["addState","removeState"]),

        tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(item){
          this.addState(item)
          
      },
      remove(item){
        this.removeState(item)
      }
      }
    }
  </script>
  <style>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
    .zj{
    width: 100%;
    height:5vh;
    border-bottom: 0.3px solid #E4E7ED;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zj span:nth-child(2){
    margin-left: 5%;
  }
  </style>