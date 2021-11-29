package baeldung.graph.dijkstra;

import programmerxiaohui2.chapter3.part3.Dijkstra;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Set;

public class Graph {
	private Set<Node> nodes = new HashSet<>();

	public void addNode(Node nodeA) {
		nodes.add(nodeA);
	}

	public Set<Node> getNodes() {
		return nodes;
	}

	public void setNodes(Set<Node> nodes) {
		this.nodes = nodes;
	}


}
