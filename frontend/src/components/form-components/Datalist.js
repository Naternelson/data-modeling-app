import Option from './Option'
const DataList = props => {
    const {id, options} = props
    const optionGroup = options.map((o, i) => <Option key={i} option={o}/>)
   return  <datalist id={id}>
       {optionGroup}
    </datalist>
}
export default DataList;