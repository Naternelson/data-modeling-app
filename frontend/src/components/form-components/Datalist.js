import OptionGroup from './OptionGroup'
const DataList = props => {
    const {id, options} = props
   return  <datalist id={id}>
       <OptionGroup options={options}/>
    </datalist>
}
export default DataList;