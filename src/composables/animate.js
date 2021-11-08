import { onBeforeMount, onMounted } from "vue";
import { watch } from "vue";

export default (component, positions, delay) => {
  onMounted(() => {
    document.getElementById(component).style.transition = ` ${delay}s `;
    document.getElementById(component).style.transitionProperty = `top, left, right, bottom `;

    let transform = 1;
    positions.forEach((el, key) => {
      setTimeout(() => {
        document.getElementById(component).style.left = el.x;
        document.getElementById(component).style.top = el.y;

        if (el.reverse){
            transform = transform * -1;
            document.getElementById(component).style.transform = `scaleX(${transform})`;
        } 

        console.log(`animacja nr ${key}   o delayu ${ 1000 * key * delay } z reverse: ${ transform }` )
      }, 1000 * key * delay );
    });
  });
};
