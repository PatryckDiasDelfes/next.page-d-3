import PostProp from "./postProp"

export default function PostList() {
  return (
    <>

      <section className="bg-[#F2C1AE] bg-opacity-50  pb-14">

        <div className="flex flex-col items-center">

          <PostProp
            title="O que é gatificação?"

            text="A gatificação é um termo utilizado para descrever a adaptação do ambiente doméstico para atender às necessidades naturais e comportamentais dos gatos. Essa prática envolve a criação de um espaço seguro e estimulante para os felinos, que inclui áreas para escalada, esconderijos, brinquedos e outras atividades que ajudam a manter os gatos saudáveis e felizes. Aqui estão algumas dicas sobre como fazer a gatificação em casa"

            items={[
              "Avalie o espaço disponível: Antes de começar a gatificação, avalie o espaço em sua casa. Identifique as áreas onde seu gato costuma passar mais tempo e onde ele pode se beneficiar de atividades como escalada e exploração.",
              "Crie áreas de escalada: Gatos adoram escalar. Instale prateleiras, postes de arranhar, árvores de gato e outros objetos que permitam que eles subam e se exercitem verticalmente. Certifique-se de que essas estruturas sejam seguras e estáveis.",
              "Forneça esconderijos: Gatos também gostam de se esconder e se aconchegar em lugares aconchegantes. Coloque caixas, cestas, tocas e almofadas em locais estratégicos para que seu gato tenha lugares onde se sentir seguro.",
              "Use brinquedos interativos: Brinquedos que estimulam a mente do gato, como bolinhas, varinhas com penas e jogos de tabuleiro para gatos, são ótimos para mantê-los mentalmente ativos. Certifique-se de trocar os brinquedos regularmente para evitar que seu gato se entedie.",
              "Crie áreas de observação: Gatos adoram observar o mundo ao seu redor. Posicione prateleiras perto de janelas para que seu gato possa ver a atividade lá fora. Isso também permite que eles tomem sol, o que é benéfico para sua saúde.",
              "Plante grama de gato: Muitos gatos gostam de mastigar grama, que pode ajudar na digestão. Considere a possibilidade de cultivar grama de gato em vasos dentro de casa para que seu felino tenha acesso a ela."
            ]}

          />

          <PostProp
            title="Alimentação"

            text="Cuidar da alimentação de um gato é fundamental para garantir sua saúde e bem-estar. Aqui estão algumas dicas importantes para garantir que seu gato receba a nutrição adequada"

            items={[
              "Alimentação balanceada. Certifique-se de fornecer uma dieta equilibrada que atenda às necessidades nutricionais do seu gato. A maioria dos gatos precisa de uma dieta rica em proteínas de alta qualidade, moderada em gordura e com baixo teor de carboidratos.",
              "Ração de qualidade. Opte por rações comerciais de alta qualidade, de preferência aquelas que listam uma fonte de proteína animal (como frango, peixe ou carne) como o primeiro ingrediente.",
              "Evite alimentos tóxicos. Não ofereça alimentos que são tóxicos para gatos, como chocolate, cebola, alho, uvas, passas e alimentos com ossos pequenos que podem ser engolidos e causar asfixia.",
              "Controle de porções. Siga as orientações de porção na embalagem da ração ou consulte o veterinário para determinar a quantidade adequada de alimento para o seu gato, levando em consideração seu peso, idade e nível de atividade.",
              "Fornecer água fresca. Mantenha uma tigela de água fresca sempre disponível para seu gato. A hidratação adequada é essencial para sua saúde."
            ]}

          />

          <PostProp
            title="Higiene felina"

            text="A higiene felina é um aspecto importante da saúde e do bem-estar de gatos de estimação. Aqui estão algumas informações sobre a higiene felina"

            items={[
              "Grooming: Os gatos são conhecidos por serem animais muito limpos e gastam uma parte significativa do seu tempo cuidando da própria higiene. Eles lambem o pelo para remover sujeira e detritos, além de distribuir óleos naturais pela pele. No entanto, é importante escovar regularmente o seu gato para ajudar na remoção de pelos mortos e evitar a formação de bolas de pelo, que podem ser prejudiciais à saúde do felino.",
              "Caixa de areia: Uma das principais preocupações dos donos de gatos é a manutenção da caixa de areia. É importante mantê-la limpa, removendo os dejetos diariamente e trocando a areia regularmente. A maioria dos gatos prefere caixas de areia em locais tranquilos e de fácil acesso.",
              "Banhos: A maioria dos gatos não precisa de banhos regulares, a menos que tenham algum problema de pele ou estejam muito sujos. No entanto, em algumas situações, como quando um gato é exposto a produtos químicos tóxicos ou materiais perigosos, pode ser necessário um banho. Certifique-se de usar um xampu específico para gatos e seguir as instruções cuidadosamente.",
              "Cuidados com as unhas: Gatos afiam suas unhas naturalmente arranhando superfícies. É uma boa ideia fornecer um arranhador adequado para o seu gato para evitar que ele use móveis ou tapetes para esse fim. Além disso, se as unhas do gato estiverem muito compridas, elas podem ser cortadas com cuidado.",
              "Escovação dental: A saúde bucal é importante para os gatos, e a escovação dos dentes pode ajudar a prevenir problemas dentários. Use uma escova de dentes e pasta de dentes específicas para gatos e siga as recomendações do veterinário quanto à frequência."
            ]}

          />

        </div>

      </section>

    </>
  )
}